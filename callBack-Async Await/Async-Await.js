function api(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("weather update");
            resolve(200);
        },2000);
    });
}

async function getWeatherData(){
    await api(); // 1st call
    await api(); //2nd call
}


function getData(dataID){
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            console.log("Data",dataID);
            resolve("success");
            // reject("erroe");
        },2000);
    });
};

async function getAllData(){
    console.log("Getting data1...");
    await getData(1);
    console.log("Getting data2...");
    await getData(2);
    console.log("Getting data3...");
    await getData(3);
    console.log("Getting data4...");
    await getData(4);
    console.log("Getting data5...");
    await getData(5);
    console.log("Getting data6...");
    await getData(6);
    console.log("Getting data7...");
    await getData(7);
};

// IIFE : it is a function that is called as soon as it is defined

(async function (){
    console.log("Getting data1...");
    await getData(1);
    console.log("Getting data2...");
    await getData(2);
    console.log("Getting data3...");
    await getData(3);
    console.log("Getting data4...");
    await getData(4);
    console.log("Getting data5...");
    await getData(5);
    console.log("Getting data6...");
    await getData(6);
    console.log("Getting data7...");
    await getData(7);
})();