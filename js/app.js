"use strict";

var userName = prompt('Hi, what\'s your name?');
var gameInit = prompt('Greetings, ' + userName + '! Would you like to play a game?\nType Y or N for your selection');

if (gameInit.toUpperCase() === 'N') {
  alert('Thank you for visiting,\nSee you next time!');
} else {
  alert('Excellent!\nClick through to see the first question!');
}

