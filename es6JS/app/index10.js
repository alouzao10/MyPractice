import Animal from './animal.js'

let king = new Animal()
king.name = "Simba"
king.height = 5

let son = new Animal()
son.name = "Fasa"
king.height = 4

console.log(king)
king.hello()
console.log(son)
son.hello()

// inheritance of classes
class Lion extends Animal {
   constructor(name, height, color) {
      super(name, height)
      this.color = color
   }
   hello(){
      console.log(`I'm ${this.name} from rock`)
   }
}

let prince = new Lion("Simba", 2, "Gold")
console.log(prince)
prince.hello()
