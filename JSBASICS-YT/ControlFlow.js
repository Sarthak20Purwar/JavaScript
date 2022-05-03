//If/Else-------------------------------------

let hour = 10;

if(hour>=6 && hour<12)
      console.log('Good Morning');
else if(hour>=12 && hour<=18)
      console.log('Good Afternoon');
else
      console.log('Good Evening');


//Greatest No
let a=100;
let b=200;
let c=300;

if(a>b && a>b)
   console.log('a is greatest');
else if(b>c)
   console.log('b is greater');
else
   console.log('c is greater');      


//SWITCH CASE---------------------------------------------------------
let role='Admin';
switch(role)
{
    case 'guest':
        console.log('Guest User');
        break;
    case 'admin':
        console.log('Admin User');
        break;
    case 'vendor':
        console.log('Vendor User');
        break;     
    default :
        console.log('No User');       
}   


