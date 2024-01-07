const URL="https://cat-fact.herokuapp.com/facts";
let para=document.querySelector("#para");
let btn=document.querySelector("#btn");

const getfact=async ()=>{
    console.log("getting data...........");
    let response=await fetch(URL);
    console.log(response); //JSON format
    let data= await response.json();
    para.innerText=data[3].text;    
}

// PROMISE CHAINING
// function getfact(){
//     fetch(URL).then((Response)=>{
//         return Response.json();
//     }).then((data)=>{
//         para.innerText=data[2].text; 
//     })
// }

btn.addEventListener("click", getfact);