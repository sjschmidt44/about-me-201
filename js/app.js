"use strict";

var userName = prompt('Hi, what\'s your name?');
console.log('userName', userName);
var gameInit = prompt('Greetings, ' + userName + '! Would you like to play a game?\nType Y or N for your selection');
console.log('gameInit', gameInit);

if (gameInit.toUpperCase() === 'N') {
  alert('Thank you for visiting,\nSee you next time!');
} else if (gameInit.toUpperCase() === 'Y'){
  alert('Excellent!\nClick through to see the first question!');
} else {
  alert('Sorry, but please try again using Y/N for your answer.');
}

var gameAnswerOne = prompt('Ok, ' + userName + ', first question:\nDo I have any pets?\nType Y or N');
console.log('gameAnswerOne', gameAnswerOne);

if (gameAnswerOne.toUpperCase() === 'N') {
  alert('Oops! I actually have two cats!');
} else if (gameAnswerOne.toUpperCase() === 'Y') {
  alert('Correct! I have 2 cats named Taz and Gaz!');
} else {
  alert('Please refresh and try again.');
}

var gameAnswerTwo = prompt('Next question, ' + userName + '!\nDo I share the same favorite color with Prince? (purple)');
console.log('gameAnswerTwo', gameAnswerTwo);

if (gameAnswerTwo.toUpperCase() === 'N') {
  alert('Oh no! I DO love purple!');
} else if (gameAnswerTwo.toUpperCase() === 'Y') {
  alert('You\'re right, ' + userName + '!\n(as if my hair wasn\'t a big enough flag!)');
} else {
  alert('You need to try Y/N next time!');
}

var gameAnswerThree = prompt('This one is tough: Am I an Android phone user?');
console.log('gameAnswerThree', gameAnswerThree);

if (gameAnswerThree.toUpperCase() === 'N') {
  alert('RIP Siri, I\'m all about that Android!');
} else if (gameAnswerThree.toUpperCase() === 'Y') {
  alert('Are we best friends yet?\nBecause you\'re totally right, ' + userName + '!');
} else {
  alert('C\'mon, just try a Y/N next time, k??');
}

var gameAnswerFour = prompt('Are Battle Royale games my favorite type to play?');
console.log('gameAnswerFour', gameAnswerFour);

if (gameAnswerFour.toUpperCase() === 'N') {
  alert('You got it, ' + userName +'!\nI\'m actually the biggest fan of RPGs (role-playing games)');
} else if (gameAnswerFour.toUpperCase() === 'Y') {
  alert('Sorry, but nope! I like to play them, but they\'re not my fave');
} else {
  alert('Letters only!!!! One! Letter!');
}

var gameAnswerFive = prompt('F I N A L  Q U E S T I O N\nDo I buy all my computers from Apple?');
console.log('gameAnswerFive', gameAnswerFive);

