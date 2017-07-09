// Static methods / Classes

class Calc {
   static multiply(a, b){
      return a * b
   }
   static add(a, b){
      return a + b
   }
}
// can access the method right away
// no need to declare new object type of class
let a = Calc.multiply(5,7)
console.log(a)

let b = Calc.add(2,2)
console.log(b)
