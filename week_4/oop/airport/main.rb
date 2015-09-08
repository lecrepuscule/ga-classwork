require_relative "airport"
require_relative "flight"
require_relative "passenger"

airport = Airport.new("London Heathrow")

def menu 
  # puts `clear`
  puts "*" * 52
  puts "Welcome to London Heathrow!".center 50
  puts "*" * 52
  puts "1: Add a flight"
  puts "2: List flights"
  puts "3: Add a passenger to a flight"
  puts "4: List passengers ona flight"
  puts "Q/q: Quit"
  print "-->"
  gets.chomp
end

def list_flights airport
  airport.flights.each_with_index{ |flight, index| puts "#{index}: #{flight}"}
end

def list_passengers flight
  flight.passengers.each_with_index{|passenger, index| puts "#{index}: #{passenger.name}"}
end

response = menu

while response.downcase != "q"
  case response
  when "1"
    puts "How many seats on this flight?"
    number_of_seats = gets.to_i
    puts "What is the flight's destination?"
    destination = gets.chomp
    puts airport.add_flight(number_of_seats, destination)
  when "2"
    puts "Here are all of the flights:"
    list_flights(airport)
  when "3"
    puts "What is the passenger's name?"
    name = gets.chomp
    passenger = Passenger.new(name)
    
    puts "What flight do you want #{passenger.name} to be added to?"
    list_flights(airport)

    flight_number = gets.to_i
    flight = airport.flights[flight_number]

    flight.add_passenger(passenger)
    puts "#{passenger.name} has been added to #{flight}"
  when "4"
    puts "What flight do you want to list the passengers from?"
    list_flights(airport)

    flight_number = gets.to_i
    flight = airport.flights[flight_number]

    puts "The passengers for this flight are: "
    list_passengers(flight)
  end
  response = menu
end





