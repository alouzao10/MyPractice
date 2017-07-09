/*const arrayIterator = (array) => {
   let i = 0
   return {
      next: () => {
         if(i < array.length){
            let next = array[i]
            i += 1
            return next
         }
      }
   }
}*/

function* arrayIterator(){
   for(let arg of arguments){
      yield arg // or just yield* arguments for multiple arguments
   }
}

//let list = arrayIterator([1,2,3,4])
let list = arrayIterator(1,2,3,4)
console.log(list.next()) // 1
console.log(list.next()) // 2
console.log(list.next()) // 3
console.log(list.next()) // 4
console.log(list.next()) // undefined
