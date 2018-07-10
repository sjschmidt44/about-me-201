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

if (gameAnswerTwo.toUpperCase() === 'N') {
    alert('Oh no! I DO love purple!');
} else 