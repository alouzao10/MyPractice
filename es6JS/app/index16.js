// ES6 Generators
// run to completion model for funtions
// the functions need to finish

// gerators can pause or resume a fucntion during its execition

function* letterMaker() {
   yield 'a'
   yield 'b'
   yield 'c'
}

const letterGen = letterMaker()
 // grabs each char one at a time
console.log(letterGen.next().value) // returns a
console.log(letterGen.next().value) // returns b
console.log(letterGen.next().value) // returns c
console.log(letterGen.next().value) // returns undefined

// Good way to generate Ids for users

function* countMaker() {
   let count = 0;
   while(count < 3){
      yield count += 1
   }
}

const countGen = countMaker()
console.log(countGen.next().value) // 1
console.log(countGen.next().value) // 2
console.log(countGen.next().value) // 3
console.log(countGen.next().value) // 4


// Controll Flow with Reset

function* evens() {
   let count = 0
   while(true){
      count += 2
      let reset = yield count
      if(reset){
         count = 0
      }
   }
}
// will never break due to the yields in returning the value
let sequence = evens()
console.log(sequence.next().value) // 2
console.log(sequence.next().value) // 4
console.log(sequence.next().value) // 6
console.log(sequence.next(true).value)
console.log(sequence.next().value)
