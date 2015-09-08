require "sinatra"
require "sinatra/reloader" if development?
require "pry"
require "pg"
require "httparty"

before do
  @db = PG.connect(dbname: "movies_app", host: "localhost")
end

after do
  @db.close
end

get '/' do
  if params[:title]
    puts "user has submitted the form"
    puts params[:title]
    movie_name = params[:title].downcase.gsub(" ", "+")
    movie_object = HTTParty.get("http://www.omdbapi.com/?t=#{movie_name}")
    @movie_hash = movie_object

    sql = "insert into movies (
      title, 
      poster, 
      year, 
      released, 
      runtime, 
      genre, 
      director, 
      writers, 
      actors, 
      plot) 
    values (
      '#{@movie_hash['Title']}', 
      '#{@movie_hash['Poster']}',
      '#{@movie_hash['Year']}',
      '#{@movie_hash['Released']}',
      '#{@movie_hash['Runtime']}',
      '#{@movie_hash['Genre']}',
      '#{@movie_hash['Director']}',
      '#{@movie_hash['Writer']}',
      '#{@movie_hash['Actors']}',
      '#{@movie_hash['Plot'].gsub("'", "''")}'
      );"
    @db.exec(sql)  
  end
  erb(:movie)
end

get "/movies" do
  sql = "select title from movies"
  @movies = @db.exec(sql)
  erb(:movies)
end

get "/movies/:movie_name" do
  name = params[:movie_name]   
  sql = "select * from movies where title = '#{name}'"
  @details = @db.exec(sql)
  erb(:movie_details)
end
