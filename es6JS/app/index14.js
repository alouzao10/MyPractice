// Closures
// Can reference independent variables within environsment scope
// anable function factories and private data

let call = () => {
   let secret = 'ES6 Rocks'
   let reveal = () => {
      console.log(secret) // the global scope in in call and can access it
   }
   return reveal; // reveal()
}
//call()
// lexical scoping
// keeps track of the location of the variables scope and where it can be used

//console.log(secret) // not defined in global scope

let unveil = call();
unveil()

// Function Factories
// The first function takes in an argument
// defeines a closure and then returns it
const addSuffix = (x) => {
   const concat = (y) => {
      return y + x
   }
   return concat
}

let addNess = addSuffix("ness") // looks at concat fucntion and returns y + x
console.log(addNess)
let h = addNess("Happi") // the string is passed in to suffix and concatinated
console.log(h)

let addFul = addSuffix("ful")
let f = addFul("Fruit")
console.log(f)


const product = (x) => {
   return y => {
      return y * x
   }
}

// Other way to present funcrion factories
//const product = x => y => return y * x

let mult5 = product(5) // setting the inner fucntion parameter
console.log(mult5(3)) // execurtes the fucntion factory
let double = product(2)
console.log(double(5))
