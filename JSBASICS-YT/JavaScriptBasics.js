//DATA TYPES---------------------------------------------------------------------

let name = 'Sarthak';
console.log(name);

let age = 23;
console.log(name + " " + age);

let color = 'red';
console.log(color);

// let range= 4;
// range =5 ;
// console.log(range);

//to not change the value of the variable use const

const range= 4;
//range =5 ;  not allowed
console.log(range);

// let- value of variable can be changed
// const- value cant be changed


//PRIMITIVE DATATYPE------------------------------------------------------

//String
let str = "Sarthak Purwar";

//Number
let num = 20;
let salary=12.33;

//Boolean
let flag = true;
let isActive = false;

//Undefined
let price;
let wheels = undefined;

//Null
let model = null;

//typeof str in console


//JAVASCRIPT IS DYNAMIC TYPING--------------------------------------------------------
let d= "Sarthak";
d=30;
console.log(d);

//REFERENCE DATATYPES------------------------------------------------

//Object
let user = {
    name:"Tom",
    age:20,
};
console.log(user);
console.log(user.name);
console.log(user.age);

user.age=30;
console.log(user.age);
console.log(user.name + " " + user.age);

//Array -List of objects
let language = ['Java' , 'JavaScript'];
console.log(language);
console.log(language.length);

language[2]='C++';
console.log(language);
console.log(language.length);

console.log(language[0]);
console.log(language[1]);
console.log(language[2]);

console.log(typeof language);

//Functions

//Non Parameterized Function
function getName(){
    console.log("Function Called");
}
getName();


//Parameterized Function
function greet(name , age){
 console.log('Hello ' + name + " " + age);
}
greet('Sarthak' , 23);
greet('Sarthak'); //It gives undefined age 


//return from a function 
function add(num1 , num2)
{
   return  num1 + num2;
}
console.log(add(10,10));

function sqRoot(number)
{
    let root = number*number;
    return root;
}
console.log(sqRoot(2));