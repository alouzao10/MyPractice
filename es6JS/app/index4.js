// Lesson 4
// ... is the spread operator to insert items
let a = [20, 30, 40]
let b = [10, ...a, 50]
console.log(b)

let c = ['Dana', 'Jim', 'Bob']
let d = ['Paul', 'Dan', 'Kim', ...c]
console.log(d)

function collect(...a) {
   console.log(a)
}
// allow multiple arguments and gathers into one array
collect(1,2,3,4,5)
collect(0,1,2,3,5,43)
