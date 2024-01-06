// let prom=new Promise((resolve,reject)=>{
//     console.log("I am a promise");
//     // resolve("success");
//     reject("error occured");
// });

function getData(dataID,getNextData){
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            // console.log("Data",dataID);
            // resolve("success");
            reject("erroe");
            if(getNextData){
                getNextData();
            }
        },5000);
    });
};

const getpromise=()=>{
    return new Promise((resolve,reject)=>{
        console.log("Promise");
        resolve("123");
        // reject("network error");
    });
};

let promise=getpromise();
promise.then((res) =>{
    console.log("Promie fulfilled",res);
})
promise.catch((err) =>{
    console.log("error",err);
});


function asyncFunc1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("details1");
            resolve("success");
        },4000);
    });
}

function asyncFunc2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("details2");
            resolve("success");
        },4000);
    });
}

// Async function using promise  

// console.log("fetching data1.......");
// let p1=asyncFunc1();
// p1.then((res)=>{
//     console.log(res);
// });

// console.log("fetching data2.......");
// let p2=asyncFunc2();
// p2.then((res)=>{
//     console.log(res);
// });

// Promise chaining:
console.log("fetching data1.........");
let p1=asyncFunc1();
p1.then((res)=>{
    console.log(res);
    console.log("fetching data2.......");
    let p2=asyncFunc2();
    p2.then((res)=>{
        console.log(res);
    });
});

// Second way of writing the Promise chaining 
// console.log("fetching data1..........");
// asyncFunc1().then((res)=>{
//     console.log("fetching data2..........");
//     asyncFunc2().then((res)=>{});
// });


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
