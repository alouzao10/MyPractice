// Lesson 2
// var allows global scoping as let is block scoping
// const also allows block scoping
const limit = 200

{
   const limit = 10
   console.log("Backstage = " + limit)
}

console.log("Tot Tickets = " + limit)

function hello(){
   let message = "Hello"
   console.log(message)
}
function greeting(){
   let message = "How are you"
   console.log(message)
}

hello();
greeting();
