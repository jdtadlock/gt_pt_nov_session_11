// Export and Import(require)
var inquirer = require('inquirer');

inquirer.prompt([
	{
		name: 'age',
		message: 'What is your age?'
	}
]).then(function(answer) {
	console.log(answer);
});

var blah = require('./Person');

var jd = new blah('JD', 38);

// console.log(jd);


// var blah = 'blah';

// module.exports = blah;
// console.log(construc);