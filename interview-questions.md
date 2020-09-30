# ASSESSMENT 4: Interview Practice Questions - Brian Thomas Hammond
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.  

1. What is an instance variable in Ruby? How is it different from other variables?

  Your answer: An instance variable is an attribute of a class which can have a different value for each individual object in that class.

  Researched answer: Instance variables of an object can only be accessed that object's instance methods. Instance variables are private on creation. An undefined instance variable has the value of nil.



2. What is a block in Ruby?

  Your answer: A block is an anonymous piece of code which can be used to create a method.

  Researched answer: A block can accept input and returns a value.



3. Ruby has an implicit return. What does that mean?

  Your answer: Implicit return means that a Ruby method will return the result of the last operation performed inside of it.

  Researched answer: Shoud have added "even if the keyword return is not used".



4. What is object-oriented programming? How is it different than functional programming?

  Your answer: Object-oriented programming relies on manipulating and transforming data through the use of objects that can interact with themselves and others. I do not yet have a strong grasp of the definition of functional programming.

  Researched answer: Functional programming relies on a paradigm where the same inputs to a function will always return the same outputs regardless of the order in which the inputs are received. Functional programming also relies on immutable objects. Functional programming aims to isolate and minimize side effects, i.e. state changes outside called functions other than their return value.



5. What is the difference between a class and an object?

  Your answer: A class is a blueprint for an object. An object is the programmatic entity created by instantiating a class. A definition I saw once is: A class has logical existence - an object has physical existence.

  Researched answer: I forgot this that I researched for last week's assessment. A class is a definition that is created once. Objects of that class are created as many times as you desire.



6. STRETCH: What is `attr_accessor`?

  Your answer: `attr_accessor` is a shorthand for creating getter and setter methods for one or many symbols in a Ruby class.

  Researched answer: It's actually for instance variables, although `attr_accessor` does use symbols in its declaration.



## Looking Ahead: Terms for Next Week
- PostgreSQL: is an open source object-relational database system that uses the SQL language. It can execute complex queries and the user can extend PostgreSQL by adding new data types, functions, and operators.

- API: stands for application programming interface. It is a set of functions and procedures allowing the creation of applications that access the features or data of an operating system, application or other service.

- CRUD: is an acronym for the four basic functions API models should be capable of performing. They should be able to Create, Read, Update, and Delete resources.

- Ruby on Rails: is a development tool that abstracts and simplifies common tasks which enables developers in the creation of websites and applications through leveraging JSON, XML, HTML, CSS, and JavaScript.

- ORM: refers to Object-Relational-Mapping (or Mapper if you're talking about an individual library rather than the overall concept). It is the process of storing data in objects or using the object-oriented syntax of your preferred scripting language to write database queries.

- Active Record: is an Object-Realational-Mapping system that facilitates the creation and use of business objects that carry persistent data and behavior. It seeks to minimize the amount of conifugration code written by the user through standardizing creation conventions.
