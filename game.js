var player_hp = 100;
var opponent_hp = 100;
var player_attack = 10;
var player_turn = true;
var cycle;

// FUNCTIONAL PROGRAMMING -- using functions to seperate our actions

function getRandNum() {
	return Math.floor(Math.random() * 10) + 1;
}

// If I get hit, decrease hp by 10
function hit() {
	player_hp -= getRandNum();
}

// If I attack, increase attack by 5
function attack() {
	player_attack += 5;
	opponent_hp -= getRandNum();
}

// Start game
function startGame() {
	cycle = setInterval(function() {
		if ( player_hp <= 0 || opponent_hp <= 0 ) {
			clearInterval(cycle);
			if ( player_hp > opponent_hp ) 
				console.log('You won!');
			else console.log('You Lost...');
		} else {
			console.log(`Player HP: ${player_hp} \n Opponent HP: ${opponent_hp}`);
		}

		if ( player_turn ) 
			attack();
		else hit();

		player_turn = !player_turn;
		
	}, 500);	
}
startGame();

// Recursion is a function that calls itself

// console.log(`Player HP: ${player_hp} \n Opponent HP: ${opponent_hp}`);
// var bool = 0;

// Timeout -- Only run once
// setTimeout(function() {
// 	console.log('Timeout called');
// }, 3000);

// // Interval -- runs infinitely
// setInterval(function() {
// 	console.log('ran');
// }, 2000);





