//object is a collection of properties
let person={                              //object
    firstName: 'Tim',
    lastName: 'Joe',  //properties
    age: 23,
    fullName: function()   //function
    {
        console.log(this.firstName+this .lastName); //this represent current object
    }
}
console.log(person.firstName);
console.log(person.lastName);

//update element
person.firstName = "Sarthak";
person.lastName = "Purwar";
console.log(person.firstName);
console.log(person.lastName);

//add element
person.gender="Male";
console.log(person);

//delete element
delete person.gender
console.log(person);

console.log("**************************************");
console.log('gender' in person);

//print all the value of the javascript object 
for(let key in person)
{
    console.log(person[key]);
}

console.log(person.fullName());

