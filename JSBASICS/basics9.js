//Inheritance
const Person = require("./basics7")
class Pet extends Person
{  
    get location()
    {
        return "BlueCross";
    }

   constructor(firstName , lastName)
   {
       //call parent class constructor
       super(firstName,lastName);
   }

}

let pet = new Pet("sam" , "san");
pet.fullName();
console.log(pet.location);


