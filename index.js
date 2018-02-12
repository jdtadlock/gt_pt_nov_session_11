// Front end -- Browser
// Back end -- Terminal

// Constructors are reusable to create objects

// javascript has too much stuff going on
// 'Some string', 37, true/false, ['one', 'two', 'three'], {name: 'JD'}, function() {} / Objects
// var person1 = {
// 	name: 'JD',
// 	age: 38
// }

// var person2 = {
// 	name: 'Bob',
// 	age: 99
// }

// var person3 = {
// 	name: 'Sarah',
// 	age: 25
// }

// What are functions in Javascript? Objects
// Classical Inheritance or Prototypal
function Person(name, age) {
	// console.log(name, age);
	this.name = name;
	this.age = age;

	// Method called getAge
	// Classical -- create method each time this object is constructed
	this.getAge = function() {
		console.log(this.age);
	}
}

// Prototypal Inheritance
Person.prototype.getAge = function() {
	console.log(this.age);
}

// var obj = {
	
// }

function test() {

}

var some_test = new test();

console.log(some_test);


var jd = new Person('JD', 38); // New instance of an object from the constructor
// var sarah = new Person('Sarah', 33);
// var bob = new Person('Bob', 99);
// console.log(jd.age);
jd.getAge();


// class Person {
// 	constructor(name, age) {
// 		this.name = name;
// 		this.age = age;
// 	}
// 	getAge() {
// 		console.log(this.age);
// 	}
// }





// var data = {
// 	color: 'red',
// 	getColor: function() {
// 		console.log(this.color);
// 		this.age = 50;
// 	}
// }

// console.log(data.age);
// data.getColor();
// console.log(data.age);








