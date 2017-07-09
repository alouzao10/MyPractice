// Data Structures

// Use of Sets to store unique values with no duplicates
let a  = new Set()
a.add(5)
a.add(43)
a.add("Woohoo")
a.add({x: 50, y: 200}) // object with vars x and y
console.log(a)
console.log("Elements in a " + a.size)
console.log(a.has("Woohoo")) // if the paramter exists in the sets

let nums = [1,2,3,4,5,6,7]
let numSet = new Set(nums) // pass in array to become a set
console.log(numSet)

// enhanced for loop
for(let element of numSet.values()){ // element is set to each value in numSet
   console.log(element)
}

// checking elements of a string
let chars = 'asdfghjkl'
let charsArr = chars.split("") // each element of string stored in array
let charsSet = new Set(charsArr)
console.log(charsSet)


// Use of Maps to deal like objects (2 parameters that are connected)
let b = new Map()
let key1 = "String Key"
let key2 = {a: 'key'}
let key3 = function(){}
b.set(key1, 'return for String Key')
b.set(key2, 'return for Object Key')
b.set(key3, 'return for function Key')
console.log(b)

let arr = [[1, 'one'], [2, 'two'], [3, 'three']] // left maps to right
let map = new Map(arr)
console.log(map)

for(let [key, value] of map.entries()){
   console.log(`${key} points to ${value}`)
}

let string = 'asdddaaafghgggddj'
let letterMap = new Map()
for(let i = 0; i < string.length; i++){
   let letter = string[i]
   if(!letterMap.has(letter)){
      letterMap.set(letter, 1)
   } else {
      letterMap.set(letter, letterMap.get(letter) + 1)
   }
}
console.log(letterMap)
