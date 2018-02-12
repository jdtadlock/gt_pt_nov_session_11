var test = 'anything';
var something_else = 'something';
var blah = require('./app');

// module.exports = test;

// module.exports = {
// 	test: test,
// 	something: something_else
// };


function Person(name, age) {
	this.name = name;
	this.age = age;
}

module.exports = Person;