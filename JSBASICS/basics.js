console.log("Hello World");

//
/*



*/ 

let a=4
console.log(a);
console.log(typeof(a));

let b=2.34;
var c = "sarthak purwar";
console.log(b);
console.log(c);

var c = a + b; //using var we can redeclare variable like c
console.log(c);

let required=true;
console.log(!required);

const flag = true;
if(flag ===true)
console.log("Success");
else 
console.log("Not Success");

let i=0;
while(i<10)
{
    i++;
    console.log(i);
}

let j=0;
do{
    j++;
   
}while(i>10);
console.log(j)

let tom = true 
while(tom)
{
    console.log(tom)
    tom=false
}
console.log("****************************");
let k=0;
for(let n=1 ; n<=100 ; n++)
{
   if(n%2===0 && n%5===0)
   {
      console.log(n);
      k++;
      if(k===3)
      break;
   }

}



