// Array
let marks=[90,80,50,54,78,9,7];
console.log(marks);
console.log(marks.length);

let citys=["kol","ban","del","man"];
console.log(citys);
// Arrays are mutable

for(let city of citys){
    console.log(city);
}

for(let i=0;i<marks.length;i++){
    console.log(marks[i]);
}

let sum=0;
let n=marks.length;
for(let i=0;i<n;i++){
    sum+=marks[i];
}
console.log(`Average marks of the students is: ${sum/n}`);

// METHODS of array
// push(): add to end
// pop(): delete from end & return 
// tostring(): convert array to string -- changes and returns a new string
marks.push(10);

for(let i=0;i<marks.length;i++){
    console.log(marks[i]);
}
console.log(marks.toString());
// concat: return the combination of 2 arrays

let marvel=["thor","spiderman","ironman"];
let dc=["superman","batman"];
let indian=["shaktiman","bheem"];

let heroes=marvel.concat(dc,indian);
console.log(heroes);

// unshift(): add to the start of the array
// shift(): delete from start & return 

heroes.unshift("iron");
console.log(heroes);
let deleted=heroes.shift();
console.log(deleted);

// slice(): return a piece of array:--    does not change the original array
// splice(): change original array (add,remove,replace);

console.log(heroes.slice(1,5));

let arr=[0,1,2,3,4,5,6,7,8,9];
arr.splice(2,2,101,102);
console.log(arr);
// use of splice to add elements
arr.splice(2,0,5,4);
console.log(arr);


// Question

let comp=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
comp.shift();
console.log(comp);
comp.splice(2,1,"OLA");
comp.push("Amazon");
console.log(comp);


// foreach loop 

let val=[10,50,9,95,7,84,5,63,45,2,4,7,5,6];

val.forEach((a)=>{
    console.log(a);
})