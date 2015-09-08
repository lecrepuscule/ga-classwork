require "sinatra"
require "sinatra/reloader" if development?
require "pry"

get "/" do
  @header = "Homepage"
  @data = {
    name: "citygent",
    hobbies: ["loads", "of", "shit"],
    age: 48
  }
  erb :home
end

get "/hi/:firstname/:lastname/:location/:age" do
  "I am Sinatra and I am saying hi to #{params[:firstname]} #{params[:lastname]} and they are in #{params[:location]} and are #{params[:age]} old"
end


#Verb "PATH" do
#Execute code
#end