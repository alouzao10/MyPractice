// ES7 and ES8 Features

// Exponent
let a = Math.pow(2,5) // ES6
console.log(a)

let b = 2**5 // ES7
console.log(b)

// String Concatination
let str = "wonderful".includes("wonder") // ES6
console.log(str)

let arr = [2,3,4,5,6].includes(3) // ES7 with arrays
console.log(arr)

// ES8 Object manipulation
let obj = {a: 'one', b: 'two', c: 'three'}
let keys = Object.keys(obj)
console.log(keys)
let values = Object.values(obj)
console.log(values)
let entries = Object.entries(obj)
console.log(entries)

for(let entry of entries){
   console.log(`key: ${entry[0]} with value: ${entry[1]}`)
}

// Asnyc Function Features
// running multiple process at once but top to bottem model
// shorter functions to execute first instead of later on

async function async_one(){
   return "one"
}

async function async_two(){
   //throw new Error('issue with async')
   return "two"
}

// write code that is dependent on the promise
async function async_three(){
   const one = await async_one() // makes sure the variable is set not undef
   console.log(one)
   const two = await async_two() // makes sure the variable is set not undef
   console.log(two)
}

async function async_four(){
   const [resOne, resTwo] = await Promise.all([async_one(), async_two()])
   console.log(resOne, resTwo)
}

async_one().then(response => console.log(response))
async_two().catch(error => console.log(error))
async_three() // prints out in console: one two
async_four() // returns: one two
