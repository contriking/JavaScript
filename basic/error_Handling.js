let a=5;
let b=10;
// error Handling is used to pervent the entire code to crash when there is error in one line or max 2-lines
console.log("a: ",a);
console.log("b: ",b);
// instead of writing b, C created an error to prevent working of entire code
try{
    console.log("a+b: ",a+c); //Error
}catch(err){
    console.log(err);
}

console.log("a+b: ",a+b);
