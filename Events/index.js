let btn=document.querySelector("#btn1");
let div=document.querySelector("div");
// btn.onclick=()=>{
//     console.log("click kyu kiya");
// }


// evt is event object 
// div.onmouseover=(evt)=>{
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX, evt.clientY);
//     console.log("aandar aa gaya bhai");
// }

// Event Listener
// btn.addEventListener("click", (evt)=>{
//     console.log("clicked form handler1");
// })
// btn.addEventListener("click", (evt)=>{
//     console.log("clicked form handler2");
// })
//  const hand3=()=>{
//     console.log("clicked form handler3");
// };
// btn1.addEventListener("click",hand3);

// btn.addEventListener("click", (evt)=>{
//     console.log("clicked form handler4");
// })
// // To remove event listener
// btn.removeEventListener("click",hand3);

// creating a toggle effect i.e. Light to dark and vice versa

let toggle=document.querySelector("#mode");
let currMode="light";
toggle.addEventListener("click",()=>{
    if(currMode==="light"){
        currMode="dark"
        // document.querySelector("body").style.backgroundColor="red";
        console.log(currMode);
        document.querySelector("body").classList.add("dark");
        document.querySelector("body").classList.remove("light");
    }
    else{
        currMode="light";
        // document.querySelector("body").style.backgroundColor="blue";
        console.log(currMode);
        document.querySelector("body").classList.add("light");
        document.querySelector("body").classList.remove("dark");
    }
})