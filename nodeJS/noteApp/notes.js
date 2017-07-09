// Notes:
console.log('Starting Notes');

// console.log(module) // shows the object properties the file can use
module.exports.age = 22; // export a variable

// arrow function to fucntion with no name needed
module.exports.addNote = () => { // export a function
   console.log('addNote');
   return 'New note';
};

module.exports.add = (a, b) => {
   return a + b;
};
