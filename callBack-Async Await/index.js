// syncronous program : The program runs in a sequence i.e line by line 
// Eg:
console.log("one");

// Async program
// setTimeout delays the execution of the code by desired time
// timeout 2s=2000ms
// Using arrow function
setTimeout(()=>{
    console.log("hello bhai");
},4000);

// CallBack
function sum(a,b){
    console.log(a+b);
}

function calculator(a,b,sumCallback){
    sumCallback(a,b);
}

// calculator(1,3,sum);
calculator(1,2,(a,b)=>{
    console.log(a+b);
})