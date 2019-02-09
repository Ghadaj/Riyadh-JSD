class Monkey {
    constructor(name,species, foodsEaten){
       this.name = name
       this.species = species
       this.foodsEaten = foodsEaten

    }

     eatSomething (food){
        this.foodsEaten = food;
    }

    get interduce (){
      return "Name: "+ this.name + " Species: " + this.species + " Food eaten: "+ this.foodsEaten
    }
}

var m1 = new Monkey("A", "x", "Banana")
var m2 = new Monkey("B", "y","Apple")
var m3 = new Monkey("C","z","Orange")

console.log(m1.interduce)
m1.eatSomething("Mango")
console.log(m1.interduce)
console.log(m2.interduce)
console.log(m3.interduce)
