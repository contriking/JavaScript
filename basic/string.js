let str="Kyalikhu";
let n=str.length;
console.log(n);
let str2="likhukya";

// Template Literals: A way to have embedded expression in strings
// ``: This is called backticks
let sen=`This is a template literals`;
console.log(sen);
// Use of template literals

let obj={
    item:"pen",
    price:50
}
console.log("The value of ",obj.item,"is",obj.price,"rupees.");
// using template literals
console.log(`The value of the ${obj.item} is ${obj.price} rupees`);
// STRING INTERPOLATION: to create string by doing substitution of placeholders like the above one

// Escape character:  \n ,\t

// String methods :  string methods create a new string and return it  --  IMMUTABLE

// Inbuilt function
// str.toUpperCase()
// str.toLowerCase()
// str.trim():  remove whitespaces
// str.slice(start,end)
// str.concat(str1)
// str.replace(s,r);
// str.CharAt(idx);

let val=prompt("enter your full name: ");
let len=val.length;
let user='@'+val+len;
console.log(user);