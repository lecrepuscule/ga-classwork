require "sinatra"
require_relative "./models/capitalize"

get "/:word" do
  "#{Capitalize.cap params[:word]}"
end