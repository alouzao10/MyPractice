// Async Programming: diverts blocking into event handling
// UI and Browser handle events Async
// Sync Programming: run in sequence w/out blocking

// Promises: handle Async in ES6
// 3 states of Pending, Fulfilled, and Rejected

// resolve future evaluation
// reject can't determine value

let p = new Promise((resolve, reject) => {
   //resolve('Resolved Promise Data')
   //reject('Rejected Data')
   setTimeout(() => resolve('Resolve Promise Data'), 3000) // wait and show txt
})


//consuming the process
// calling the Promise and if it has a response return it
p.then(response => console.log(response))

// reject a standin value
// useful for servers, API, ect for cating errors and log / terminate
p.then(response => console.log(response)).catch(error => console.log(error))

console.log('After Promise Consumption')
