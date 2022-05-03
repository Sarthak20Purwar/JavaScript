module.exports = class Person
{
    age =23;

    get location()     //access using getter method 
    {
        return "Canada";
    }

    //constructor => executes by default when we create object of the class

    constructor(firstName , lastName)  //initialize any value here these are instance variables
    {
          this.firstName= firstName;
          this.lastName=lastName;
    }

    fullName()
    {
        console.log(this.firstName+this.lastName);
    }
}

// let p = new Person("Sarthak" , "Purwar");   //to access property we have to create object of the class
// console.log(p.age);
// console.log(p.location);
// console.log(p.fullName());

// let p1 = new Person("Raghav" , "Purwar");
// console.log(p1.fullName());



