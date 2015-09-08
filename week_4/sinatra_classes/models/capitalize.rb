class Capitalize

 def self.cap word
    word[0].upcase.concat word[1..word.length]
 end

end