'use strict';

// Get userName and ask if they want to play a game
var userName = prompt('Hi, what\'s your name?');
console.log('userName entered:', userName);
var gameInit = prompt('Greetings, ' + userName + '! Would you like to play a game?\nType Y or N for your selection').toUpperCase();
console.log('gameInit value entered:', gameInit);

if (gameInit === 'N') {
  alert('Thank you for visiting,\nSee you next time!');
} else if (gameInit === 'Y'){
  alert('Excellent!\nClick through to see the first question!');
} else {
  alert('Sorry, but you\'re stuck here!');
}

// QUESTION ONE
var gameAnswerOne = prompt('Ok, ' + userName + ', first question:\nDo I have any pets?\nType Y or N').toUpperCase();
console.log('gameAnswerOne value entered:', gameAnswerOne);

if (gameAnswerOne === 'N') {
  alert('Oops! I actually have two cats!\nI also hope to adopt a dog by the end of 2018, but we\'ll have to wait and see!');
} else if (gameAnswerOne === 'Y') {
  alert('Correct! I have 2 cats named Taz and Gaz!');
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
} else {
  alert('C\'mon, just try a Y/N next time, k??');
}

//QUESTION FOUR
var gameAnswerFour = prompt('Are Battle Royale games my favorite type to play?\nType Y or N').toUpperCase();
console.log('gameAnswerFour value entered:', gameAnswerFour);

if (gameAnswerFour === 'N') {
  alert('You got it, ' + userName +'!\nI\'m actually the biggest fan of RPGs (role-playing games)');
} else if (gameAnswerFour === 'Y') {
  alert('Sorry, but nope! I like to play them, but they\'re not my fave.\nRPGs hold that spot!');
} else {
  alert('Letters only!!!! One! Letter!');
}

//QUESTION FIVE
var gameAnswerFive = prompt('F I N A L  Q U E S T I O N\nDo I buy my computers from Apple?\nType Y or N').toUpperCase();
console.log('gameAnswerFive value entered:', gameAnswerFive);

if (gameAnswerFive === 'N') {
  alert('You are right, ' + userName + '.\nI actually build my own personal computers!');
} else if (gameAnswerFive === 'Y') {
  alert('Oh noes, def not! I use Macs for work only - playtime is on my custom-built PC!');
} else {
  alert('Welp, at least this is the last invalid answer you can give lol');
}

alert('Thanks for playing, ' + userName + '!\nI hope you enjoyed the facts you now know about me!');