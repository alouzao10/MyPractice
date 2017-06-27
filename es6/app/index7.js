// map and filter methods

let values = [20, 30, 40]
/*let doubleNum = (n) => {
   return n*2;
}*/

// mapping a function to each element in array
/*let doubled = values.map(
   (n) => {
      return n*2;
   }
)*/
let doubled = values.map((n) =>  n*2)
console.log(doubled)

// filtering
let points = [7, 1, 9, 10, 2, 3]
let highScores = points.filter((n) => n > 5 )
console.log(highScores)
