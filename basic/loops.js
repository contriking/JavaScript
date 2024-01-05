// For-Loops in js

for(let i=0;i<100;++i){
    console.log("loops in js ");
}
// sum of n
let sum=0;
for(let i=0;i<=5;i++){
    sum+=i;
}
console.log(sum);

// while loop

let i=0,n=10;

while(i<n){
    console.log("value of i is ",i);
    i++;
}

// do while loop
let k=1;
do{
    console.log("value if k is: ",k);
    k++;
}while(k<10);

// for-of loop
// for of loop is used to iterate over all character in a string
let str="hello there"
for(let val of str){
    console.log("value is :",val);
}

// for-in loop : used to iterate in OBJECT

let student={
//  key : value
    name: "Ranamappa",
    age: 21,
    cgpa:7.9,
    pass:true
}

for(let i in student){
    console.log("key is: ",i,"value is: ",student[i]);
}

for(let i=1;i<=100;i++){
    if(i%2==0 && i%3==0){
        console.log(i);
    }
}

console.log("Lets begin the game!!");
let gameNo=25;
while(true){
    let val=prompt("Guess the game number:");
    if(val==gameNo){
        console.log("Yippee!! You got the correct number.")
        break;
    }else if(val>gameNo){
        console.log("enter a lower number!");
    }else{
        console.log("Enter a higher number!");
    }
}
