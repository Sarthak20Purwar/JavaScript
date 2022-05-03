//OPERATORS-------------------------------------

//Arithmatic 
let x= 10;
let y= 20;
console.log(x+y);
console.log(x-y);
console.log(x*y);
console.log(x/y);
console.log(x ** y); //x^y

//Increment & Decrement Operator 

//Post++
let p=1;
console.log(p++);  //1
console.log(p);   //2

let p1=1;
let q1=p1++;
console.log(p1);  //2
console.log(q1);  //1

//++Pre
let p2=1;
console.log(++p2);   //2
console.log(p2);    //2

let p3=1;
let q3=++p3;
console.log(p3);     //2
console.log(q3);     //2


//--Pre
let m = 2;
console.log(m--); //2
console.log(m);   //1


//Post--
let m1 = 2;
console.log(--m1);   //1
console.log(m1);     //



//Assignment 
let a= 10;
let c=a+10;
console.log(x+c);

//a=a*10;
a*=10;
console.log(a);


//Comparision
let b=10;
console.log(x>1);
console.log(b===10); //Strict equality (type & value check here)

console.log('1' == 1);  //Loose equality (only value check here)
console.log(true==1);


//Ternary Operator
let points = 110;
let type = points > 100 ? 'gold' : 'silver';
console.log(type);


//Logical 

//AND(&&)
let highIncome= true;
let goodCreditScore=true;
let eligibleForLoan = highIncome && goodCreditScore

console.log(eligibleForLoan);

//OR(||)
let ab = true;
let ba = false;
let abc = ab || ba;

console.log(abc);

//NOT (!)
let isActive =  true;
console.log(! isActive);
console.log(!(10<5));

//logical operator with Non Boolean 

//falsy_value(undefined , null , 0 , false , ' ' , NaN)
console.log(false || 'sarthak');
console.log(false || 1);
console.log(false || 1 || 2);
console.log(true || 1 || 2);


//real time example
let userColor = undefined;
let defaultColor='blue';
let currentColor= userColor || defaultColor;

console.log(currentColor);



