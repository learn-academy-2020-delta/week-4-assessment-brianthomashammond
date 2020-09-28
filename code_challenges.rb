# ASSESSMENT 4: Ruby Coding Practical Questions

puts "
Week 4 Assessment - Ruby Code Challenges - Brian Thomas Hammond
"

# --------------------1) Create a method that takes in an array and returns an array with only odd numbers sorted from least to greatest.

fullArr1 = [4, 9, 0, '7', 8, true, 'hey', 7, 199, -9, false, 'hola']
# Expected output: [-9, 7, 9, 199]
fullArr2 = ['hello', 7, 23, -823, false, 78, nil, '67', 6, 'Number']
# Expected output: [-823, 7, 23]

#Write a method that takes an array
def odds_small_to_big (array) 
    #Use .select, .is_a? Numeric, and .is_odd? to pull odd numbers
    #Use .sort to sort the numbers, return implicitly
    p array.select {|item| item.is_a? Numeric and item.odd?}.sort
end


puts "
#1:
"
odds_small_to_big(fullArr1)# Expected output: [-9, 7, 9, 199]
odds_small_to_big(fullArr2)# Expected output: [-823, 7, 23]

# --------------------2) Create a class called Bike that is initialized with a model, wheels, and a frame size. The default number of wheels is 2. Create a get_info method that returns a sentence with all the data from the bike object.

#Write a class named Bike
class Bike
    #Use attr_accessor to provide getter methods 
    attr_accessor :model, :frame_size, :wheels, :speedometer
    #Initialize to define model, frame size and wheels (default 2)
    def initialize (model, frame_size, wheels = 2)
        @model = model
        @frame_size = frame_size
        @wheels = wheels
        @speedometer = 0
    end
    #Write method to print a decription of the bike's attributes
    def get_info
        p "The #{@model} bike has #{@wheels} wheels and a #{@frame_size} frame."
    end

    #Write method to hear bell ring (or in this case, beep).
    def ring_bell
        p "Beep beep!"
    end

    #Write method to display speed of bike
    def speed
        p "Your current speed is: #{@speedometer} km/h."
    end

    #Write method to increase speed of bike and display current speed
    def pedal_faster accel
        #Increment speed by the value of the argument
        @speedometer += accel
        #Display updated speed
        speed
    end

    #Write method to decrease speed of bike and display current speed
    def brake decel
        #Use ternary operator to check if the argument is greater than the current speed
        #If so, decrement speed by the value of the argument
        #If not, set speed to zero
        @speedometer >= decel ? @speedometer -= decel : @speedometer = 0
        #Finally, display updated speed
        speed
    end
    
end

puts "
#2:
"
#Insantiate a new bike with attributes
my_bike = Bike.new("Trek","168cm")
#Call get_info method to receive description
my_bike.get_info

# Expected output example: 'The Trek bike has 2 wheels and a 168cm frame.'


# -------------------3) Add a bell to the bike class and create a method that will ring the bell when the method is called.

puts "
#3:
"
#Call ring_bell method to hear the bell
my_bike.ring_bell

# Expected output example: my_bike.ring_bell => 'Beep beep!'


# -------------------4) Add a speedometer to the Bike class. The speed should be initialized at 0.

puts "
#4:
"

#Call speed method to display speed
my_bike.speed

# Expected output example: my_bike.speed => 0


# -------------------5) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed. The brake method should decrease the speed. The bike cannot go negative speeds.

puts "
#5:
"
#Call pedal_faster method to display updated speed
my_bike.pedal_faster 10 #expect "Your current speed is: 10 km/h."
my_bike.pedal_faster 15 #expect "Your current speed is: 25 km/h."
my_bike.pedal_faster 5 #expect "Your current speed is: 30 km/h."
my_bike.pedal_faster 10 #expect "Your current speed is: 40 km/h."
#Call brake method to display updated speed
my_bike.brake 15 #expect "Your current speed is: 25 km/h."
my_bike.brake 20 #expect "Your current speed is: 5 km/h."
my_bike.brake 7 #expect "Your current speed is: 0 km/h."
my_bike.brake 3 #expect "Your current speed is: 0 km/h."

# Expected output example: my_bike.pedal_faster 10 => 10
# Expected output example: my_bike.brake 15 => 0

puts"
"