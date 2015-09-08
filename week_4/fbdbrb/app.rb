require 'pg'
require 'pry'

db = PG.connect(dbname: 'facebook', host: 'localhost')

begin
  db.exec('select * from people;') do |result|
    result.each do |row|
      puts "#{row['first']} #{row['last']}"
    end
  end

  print "full name: "
  name = gets.chomp.split

  print "dob: "
  dob = gets.chomp

  print "relationship: "
  relationship = gets.chomp

  print "city: "
  city = gets.chomp

  sql = "insert into people (first, last, dob, relationship, city) values ('#{name.first}', '#{name.last}', '#{dob}', '#{relationship}', '#{city}') returning *;"

  new_user = db.exec(sql)
  new_user.each { |user| puts "#{user['first']} #{user['last']} has now joined facebook. MUHAHAHAHA. I HAZ ALL TEH DATAZ!"}

ensure
  db.close
end