//String 

let day =  "Tuesday ";
console.log(day.length);
console.log(day.slice(0,4));
console.log(day[1]);
console.log("****************");

//tue day
let splitDay = day.split("s");    
console.log(splitDay[1].length);
console.log(splitDay[1].trim().length);   //trim is used to neglect space 

let date = "23";
let nextDate = "27";
let differ = parseInt(nextDate-date);  //parseInt converts String to number
console.log(differ);
console.log(typeof differ);

differ.toString();  //toString converts number to String 
console.log(differ);
console.log(typeof differ);

//concatente strings
console.log("******************************");
let newQuote = day + "is Funday";
console.log(newQuote);

//indexOf
//count of occurence

let count = 0;
let value = newQuote.indexOf("day");
while(value!==-1)
{
    count++;
    value=newQuote.indexOf("day" , value+1);
}
console.log(count);






