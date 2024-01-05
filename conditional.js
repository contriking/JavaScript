// PROMPT is similar to alert but it can take input form user as an integer or word and print it 
let ans=prompt("Hello there");
console.log(ans);


// conditional statements 

// Arithematic operator :

// BINARY OPERATOR :

// add (+)
let a=5;
let b=7;
console.log("a: ",a);
console.log("b: ",b);
console.log("a+b: ",a+b)

// substract (-)
console.log("a-b: ",b-a);

// multiply (*)
console.log("a*b: ",a*b);

// divide (/)
console.log("a/b: ",a/b);

// modulus (%)
console.log("a%b: ",a%b);

// exponentiation (**)
console.log("a**b: ",a**b);

// UNIARY OPERATOR :

// incremetn (++a):PRE-INCREMENT
console.log("a++: ",a++);

// decrement (--a):PRE-INCREMENT
console.log("a-- :",a++);

// incremetn (++a):POST-INCREMENT
console.log("a++: ",a++);

// decrement (--a):POST-INCREMENT
console.log("a-- :",a++);

// ASSIGNMENT OPERATOR
// left=right: value propagates form right to the left

a+=4;
a-=5;
a/=1;
a*=2;
a%=2;
a**=2;

// COMPARASION OPERATOR:
//  EQUAL TO: ==;
// NOT EQUAL TO : !=
// EQUAL AND TYPE : === : Strict version of == type
// NOT EQUAL TO AND TYPE: !==
a=5;
b="5";
console.log("a==b:",a==b);
console.log("a!=b:",a!=b);
console.log("a===b:",a===b);

// LOGICAL OPERATOR

// Logical AND:&&
// Logical OR: ||
// Logical NOT: !

// TERMINARY OPEARTOR:
// condition ? true output : false output == a?b:c

let sal=25;
let result=sal>=18?"adult":"not adult";
console.log(result);
// CONDITIONAL STATEMENTS

let age=24;
if(age<18){
    console.log("you can vote");
}

let mode="dark";
if(mode=="dark"){
    color="dark";
}
else{
    color="white";
}
console.log(color);

// SWITCH STATEMENT

let exp="Papayas";

switch(exp){
    case 'orange':
        console.log("50 rupiya ka milaga 1 kilo orange");
        break;
    case 'mango':
        console.log("100 rupiya ka milaga 1 kilo aam");
        break;
    case 'Papayas':
        console.log("150 rupiya ka milaga 1 kilo Papayas");
        break;    
    default:
        console.log("Sorry case not found");
}

// let ans=prompt("Hello there");
// console.log(ans);