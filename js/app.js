'use strict';

// Get userName and ask if they want to play a game
var userName = prompt('Hi, what\'s your name?');
console.log('userName entered:', userName);
var gameInit = prompt('Greetings, ' + userName + '! Would you like to play a game?\nType Y or Esc to reach main site').toUpperCase();
console.log('gameInit value entered:', gameInit);

if (gameInit === 'N') {
  alert('Thank you for visiting, press Esc key twice to reach main site');
} else if (gameInit === 'Y'){
  alert('Excellent!\nClick through to see the first question!');
} else {
  alert('Sorry, press Esc key twice to reach main site');
}

// QUESTION ONE
var gameScore = 0;
console.log('gameScore initiliazed, should equal 0:', gameScore);
var gameAnswerOne = prompt('Ok, ' + userName + ', first question:\nDo I have any pets?\nType Y or N').toUpperCase();
console.log('gameAnswerOne value entered:', gameAnswerOne);

if (gameAnswerOne === 'N') {
  alert('Oops! I actually have two cats!\nI also hope to adopt a dog by the end of 2018, but we\'ll have to wait and see!');
} else if (gameAnswerOne === 'Y') {
  alert('Correct! I have 2 cats named Taz and Gaz!');
  gameScore++;
  console.log('gameScore should equal 1', gameScore);
} else {
  alert('Please try again.');
}

//QUESTION TWO
var gameAnswerTwo = prompt('Next question, ' + userName + '!\nDo I share the same favorite color with Prince? (purple)\nType Y or N').toUpperCase();
console.log('gameAnswerTwo value entered:', gameAnswerTwo);

if (gameAnswerTwo === 'N') {
  alert('Oh no! I DO love purple!');
} else if (gameAnswerTwo === 'Y') {
  alert('You\'re right, ' + userName + '!\n(as if my hair wasn\'t a big enough flag!)');
  gameScore++;
  console.log('gameScore should be +1', gameScore);
} else {
  alert('You need to try Y/N next time!');
}

//QUESTION THREE
var gameAnswerThree = prompt('This one is tough: Am I an Android phone user?\nType Y or N').toUpperCase();
console.log('gameAnswerThree value entered:', gameAnswerThree);

if (gameAnswerThree === 'N') {
  alert('RIP Siri, I\'m all about that Android!');
} else if (gameAnswerThree === 'Y') {
  alert('Are we best friends yet?\nBecause you\'re totally right, ' + userName + '!\nI love an open app ecosystem!');
  gameScore++;
  console.log('gameScore should be +1', gameScore);
} else {
  alert('C\'mon, just try a Y/N next time, k??');
}

//QUESTION FOUR
var gameAnswerFour = prompt('Are Battle Royale games my favorite type to play?\nType Y or N').toUpperCase();
console.log('gameAnswerFour value entered:', gameAnswerFour);

if (gameAnswerFour === 'N') {
  alert('You got it, ' + userName +'!\nI\'m actually the biggest fan of RPGs (role-playing games)');
  gameScore++;
  console.log('gameScore should be +1', gameScore);
} else if (gameAnswerFour === 'Y') {
  alert('Sorry, but nope! I like to play them, but they\'re not my fave.\nRPGs hold that spot!');
} else {
  alert('Letters only!!!! One! Letter!');
}

//QUESTION FIVE
var gameAnswerFive = prompt('Do I buy my computers from Apple?\nType Y or N').toUpperCase();
console.log('gameAnswerFive value entered:', gameAnswerFive);

if (gameAnswerFive === 'N') {
  alert('You are right, ' + userName + '.\nI actually build my own personal computers!');
  gameScore++;
  console.log('gameScore should be +1', gameScore);
} else if (gameAnswerFive === 'Y') {
  alert('Oh noes, def not! I use Macs for work only - playtime is on my custom-built PC!');
} else {
  alert('Welp, at least this is the last invalid answer you can give lol');
}

//QUESTION FIVE
var gameAnswerSix = prompt('Ok, this one is tough: What\'s the answer to life, the universe, and everything?\nYou\'ve got 4 guesses!');
gameAnswerSix = parseInt(gameAnswerSix, 10);
var guesses = 0;
console.log('gameAnswerSix value entered: ', gameAnswerSix);
console.log('Guesses counter should be 0: ', guesses);

// switch (gameAnswerSix) {
// case '42':
//   alert('You\'re right!');
//   gameScore++;
//   console.log('gameScore should be +1', gameScore);
//   break;

// default:
//   alert('That\'s not it :(');
//   break;
// }

if (gameAnswerSix !== 42) { //If the answer is wrong
  while (guesses < 3) { //while less than 4 guesses
    guesses++; //+1 to guesses counter
    console.log('gameAnswerSix value entered: ', gameAnswerSix);
    console.log('Guesses counter is +1: ', guesses);
    prompt('That\'s not it, try again!\nYou have ' + guesses + ' remaining!'); //alert that's not right
  }
} else if (gameAnswerSix !== 42) {
  while (guesses === 4) { //too many guesses, sorry
    console.log('gameAnswerSix value entered: ', gameAnswerSix);
    prompt('I\'m sorry, but the answer is 42');
    console.log('Guesses counter is +1: ', guesses);
  }
} else {
  console.log('gameAnswerSix value entered: ', gameAnswerSix);
  alert('You got it right!');
}



alert('Thanks for playing, ' + userName + '!\nI hope you enjoyed the facts you now know about me!');