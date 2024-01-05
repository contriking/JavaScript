// sum function
function sum(a,b){
    return a+b;
}
// multiplication function
function mul(a,b){
    return a*b;
}

// ARROW FUNCTION  ---- part of modern JS update 

const arrowsum=(a,b)=>{
    console.log(a+b);
}
arrowsum(7,7);

// arrowsum can be called function variable

const arrowmul=(a,b)=>{
    return a*b;
}

console.log(arrowmul(3,3));

const printhello=()=> console.log("hello");

printhello();


// PRACTICE QUESTION

function countVowel(s){
    let cnt=0;
    for(let i of s){
        if(i=='a' || i=='e' || i=='i' || i=='o' || i=='u'){
            cnt++;
        }
    }
    return cnt;
}
console.log(countVowel("alpha"));

// Arrow function for vowels

const Vowel=(str)=>{
    let cnt=0;
    for( let i of str){
        if(i=='a' || i=='e' || i=='i' || i=='o' || i=='u'){
            cnt++;
        }
    }
    console.log(cnt);
}

Vowel("clgaaa");

let cityName=["pune","Delhi","Mumbai"];
let cityPin=[1,,8,7,9,3,4,5];

cityPin.forEach((val)=>{
    console.log(val);
})

cityName.forEach((val,idx, cityName)=>{
    console.log(val.toUpperCase(),idx,cityName);
})

// val is a call back function in arrow-function.
// it has 3 parameters:-  value(item),index(position),array.

// Higher order function
function callback(){
    console.log("I am a callback function");
}

function higher(func){
    console.log("I am higher order function");
}

higher(callback);

let sq=[80,57,62];

// sq.forEach((sq)=>{
//     console.log(sq*sq);
// })

let calcsquare=(num)=>{
    console.log(num*num);
}

sq.forEach(calcsquare);

// Array Method

// Map method :  uesd to create a mew array with some operations preformed on the original array
let kal=sq.map((val)=>{
    return val*2;
})
console.log(kal);

// Filter method : used to create a new array that contain part of original array with some conditions that it fulfills

let divby2=sq.filter((val)=>{
    return val%2===0;
})
console.log(divby2); 

let acc=[1,2,3,4,9,7,15];

// Reduce method: it performs some operations and reduces the array to a single value;    EG: accumulator: calculate sum of the values of the array
const output=acc.reduce((res,curr)=>{
    return res+curr;
});
console.log(output);//10

const max=acc.reduce((prev,curr)=>{
    return prev > curr? prev:curr;
});

console.log(max);

// QUESTIONS 
// 1): Marks of student greater than 90;
let marns=[94,9,1,59,90,50,98,95,91,0,75,10,95];

let valx=marns.filter((val)=>{
    return val>90;
});
console.log(valx);

// 2): take n as input form user, create an n sized array form 1 to n  and use reduce to print the sum and product of the array;

let n=prompt("enter the size of array: ");
let arrq=[];
for(let i=0;i<n;i++){
    arrq[i]=parseInt(prompt(`Enter the valueof the ${i}th element of the array`));
}
console.log(arrq);

const sumn=arrq.reduce((prev,curr)=>{
   return prev+curr; 
});

const mulx=arrq.reduce((mul,curr)=>{
    return mul*curr;
});

console.log(`The sum of the arrq array is ${sumn}`);
console.log(`The product of the arrq array is ${mulx}`);