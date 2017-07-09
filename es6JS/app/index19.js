// HTTP and Fetch

// https://jsonplaceholder.typicode.com

// Hyper Text Transfer Protocol: sends info to the server for browser to use
// Interact with internet resources with JS

// request mthods:
// get() - retrieves information from server
// post() - update or send data to a server
// head() - title of resource
// delete() - removes specified resource
// patch() - partially modifies resource

const root = 'https://jsonplaceholder.typicode.com/posts/1'
fetch(root, { method: "GET" })
   .then(response => console.log(response))

// json methods
// returns another promise with pure JSON data
// chaining promises
fetch(root, { method: "GET" })
   .then(response => response.json())
   .then(json => console.log(json))

const root2 = 'https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699'
fetch(root2, { method: "GET" })
   .then(response => response.json())
   .then(json => console.log(json))
