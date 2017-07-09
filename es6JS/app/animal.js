class Animal {
   // define variables
   constructor(name, height) {
      this.name = name // passed into constructor to the variable
      this.height = height
   }
   // define functions
   hello(){
      console.log(`Hi I'm ${this.name} from the kingdom`)
   }
}

export default Animal
