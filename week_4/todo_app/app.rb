require "sinatra"
require "sinatra/reloader" if development?
require "pg"
require "pry"


before do
  @db = PG.connect(dbname: "todo_app", host: "localhost")
end

after do
  @db.close
end

#Index
get "/" do
  @header = "Have you done these yet?!"
  sql = "select id, item from todo"
  @items = @db.exec(sql)
  erb :list
end

# New
get "/new" do
  @header = "Yet another thing to do!"
  @new = true
  erb :list
end

# create
post "/" do
  sql = "insert into todo (item, notes) values ('#{params[:new_item]}', '#{params[:new_notes]}')"
  @db.exec(sql)
  erb :list
end

# show
get "/:item_id" do
  sql = "select item, notes from todo where id = #{params[:item_id]}"
  @item_details = @db.exec(sql)
  erb :item
end

# edit
get "/:item_id/edit" do
  erb :item
end

# update
post "/:item_id/edit" do
end
# delete



