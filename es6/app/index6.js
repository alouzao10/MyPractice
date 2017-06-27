// using the => (arrow) functions
// annonymous funciton expression
var cheer = function() {
   console.log("YAY!")
}
cheer()

// timed to exectute function
// a function expression
setTimeout(function() {
   console.log("WooHoo!")
}, 3000)

setTimeout(() => {
   console.log("WhoopdyDoo!")
}, 4000)

let cheer2 = () => {
   console.log("Hurray!")
}
cheer2()
