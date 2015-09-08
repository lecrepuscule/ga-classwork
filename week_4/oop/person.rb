class Dragon
  attr_reader :hunger, :anger

  def initialize(name)
    @name = name
  end

  def fly
    puts "swooooop"
  end

  def breath_fire
    @anger > 100 ? puts "*making whatever sound fire makes*" : puts "meh, not bothered"
  end

  def eat
    @hunger = 0
    @anger -= 10
  end

  def sleep
    puts "ZZZzzzz"
    @hunger += 10
    @anger -= 10
  end

  def play
    puts "weeeeeeee"
    @hunger += 10
    @anger = 0
  end

end


class Person

  # attr_reader :age, :name
  # attr_writer :age, :name
  attr_accessor :age, :name

  @@count = 0

  DEFAULT_NUMBER_OF_LEGS = 3

  def initialize(name, age)
    @@count += 1
    @name = name
    @age = age
  end

  def self.count
    @@count
  end


  def talk words
    puts "I can talk! Look at me ma! #{words}"
  end

  # def age
  #   @age
  # end

  # def name 
  #   @name
  # end

end


puts Person::DEFAULT_NUMBER_OF_LEGS