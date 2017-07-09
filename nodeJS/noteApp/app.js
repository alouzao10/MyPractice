// Note App

console.log("Starting App");

// Creating a file and appending to it and loading in the module
const fs = require('fs'); // only need to fetch all fs modules and store in var

// creates the txt file and adds the message to it when the program runs
fs.appendFileSync('greetings.txt', 'Hello World! \n'); // use for v8 of NodeJS

// Use of the OS module to modify info about the current user from the OS
// we can then customize the greeting
const os = require('os');
var user = os.userInfo();
//console.log(user);
fs.appendFileSync('greetings.txt', `Hello ${user.username} \n`);

// Info from userInfo()
/*
  { uid: 501,
  gid: 20,
  username: 'alexlouzao',
  homedir: '/Users/alexlouzao',
  shell: '/bin/bash' }
 */

// requiring the elements from the notes file and store in the const for use
const notes = require('./notes.js');
fs.appendFileSync('greetings.txt', `You are ${notes.age} \n`);

var result = notes.addNote();
console.log(result);

var sum = notes.add(2,3);
console.log('Result = ' + sum);
