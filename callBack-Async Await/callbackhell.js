function getData(dataID,getNextData){  //getNextData is a callback for getData
    setTimeout(()=>{
        console.log("data: ",dataID);
        if(getNextData){
            getNextData();
        }
        
    },2000);
}


// {

// function getData(dataID){
//     return new Promise((resolve,reject) =>{
//         setTimeout(()=>{
//             console.log("Data",dataID);
//             resolve("success");
//             // reject("erroe");
//         },5000);
//     });
// };

// Promise chaining
// getData(1).then((res)=>{
//     console.log(res);
//     getData(2).then(()=>{
//         console.log(res);
//     })
// })

// Best way of promise chaining 
// getData(1)
//     .then((res)=>{
//         return getData(2);
//     })
//     .then((res)=>{
//         return getData(3);
//     })
//     .then((res)=>{
//         console.log(res);
//     })

// }



// callback hell: repeted calling of callback (nested callback) 
getData(1,()=>{
    console.log("calling for 2......");
    getData(2,()=>{
        console.log("calling for 3......");
        getData(3,()=>{
            console.log("calling for 4......");
            getData(4);
        });
    });
});


// Doing the abpve E.G through promise chaining