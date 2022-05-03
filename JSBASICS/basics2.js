//Array
var marks = Array(6)
var marks = new Array(20,40,35,12,37,100) //object of array

var marks=[20,40,35,12,37,100]
console.log(marks[2]) //35
marks[3] = 14
console.log(marks) //[20,40,35,14,37,100]

console.log(marks.length) //6


marks.push(64) //append new element in an array
console.log(marks) //[20,40,35,14,37,100,64]

marks.pop() //delete element in an array
console.log(marks) //[20,40,35,14,37,100]

marks.unshift(64) //add  new element in beginning of an array
console.log(marks) //[64,20,40,35,14,37,100,64]


console.log("****************************");

console.log(marks.indexOf(100)); //6
//120 is in array or not 

console.log(marks.includes(120)); //false

//sub array from main array 
var marks=[20,40,35,12,37,100]
subMarks = marks.slice(2,5)
console.log(subMarks);

//loop sum
var sum=0 ;
for(let i =0 ; i<marks.length ; i++)
{
    console.log(marks[i]);
    sum+=marks[i];
    
}
console.log(sum);

//reduce filter map
let total = marks.reduce((sum , mark)=>sum+mark,0);
console.log(total);


var scores = [12,13,14,16];
//create new array and push even no
var points =[];

console.log("********************************");

for(let i=0 ; i<scores.length ; i++)
{
    if(scores[i]%2===0)
    points.push(scores[i]);
    
}
console.log(points);

//filter method=> returns array only which matches the condition 
let evenScores = scores.filter(score=>score%2===0);
console.log(evenScores);



//map method=> return every element
let mappedArray=evenScores.map(score=>score*3);
console.log(mappedArray);

//sum all the elements
let totall = mappedArray.reduce((sum , mark)=>sum+mark,0);
console.log(totall);

//chain
console.log("********************************")
var scores = [12,13,14,16];
let Sum = scores.filter(score=>score%2===0).map(score=>score*3).reduce((sum , mark)=>sum+mark,0);
console.log(Sum);
