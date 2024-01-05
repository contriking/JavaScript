class Toyata{

    constructor(brand,milage){
        console.log("Creating new Object");
        this.brand=brand;
        this.milage=milage;
    }

    start(){
        console.log("start");
    }
    stop(){
        console.log("Stop");
    }
    // setBrand(brand){
    //     this.brand=brand;
    // }
}

let fortuner=new Toyata("fortuner",10);
console.log(fortuner);

let lexus=new Toyata("lexus",12);
console.log(lexus);