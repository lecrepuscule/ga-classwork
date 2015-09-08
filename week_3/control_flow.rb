# puts "hello" if true

# if !true 
#   puts "hello"
# else
#   puts "bye"
# end

print "What is the capical of Switzerland? "
answer = gets.chomp.downcase

while answer != "bern"
  print "Idiot! try again!"
  answer = gets.chomp.downcase
end
  print "meh, could have answered it quicker."
