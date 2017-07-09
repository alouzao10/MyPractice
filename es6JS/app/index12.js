// prototyping via function
function Wizard(name, house, pet){
   this.name = name
   this.house = house
   this.pet = pet

   this.greet = () => `I'm ${this.name} from ${this.house}`
}

// function keywords through the arrow function etc....
Wizard.prototype.petName
Wizard.prototype.info = function(){
   return `I have a pet ${this.pet} named ${this.petName}`
}

let harry = new Wizard("Harry", "Gryff", "Owl")
harry.petName = "Hedwig"
console.log(harry)
console.log(harry.greet())
console.log(harry.info())
