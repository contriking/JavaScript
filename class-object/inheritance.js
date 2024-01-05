class Person{
    constructor(name){
        this.species="Homo sapiens";
        this.name=name;
    }
    eat(){
        console.log("eat");
    }
    sleep(){
        console.log("sleep");
    }
    work(){
        console.log("Do NOthing");
    }
}

class Engineer extends Person{
    constructor(name){
        super(name); //to invoke parent class constructor
    }
    work(){
        super.eat();
        console.log("Solve problems, build something");
    }
}

let engObj=new Engineer("Prashant");

class User{
    name;
    email;
    constructor(name,email){
        this.name=name;
        this.email=email;
    }
    viewData(){
        console.log(this.name);
        console.log(this.email);
    }
}

class Admin extends User{
    constructor(name,email){
        super(name,email);
    }
    editData(name){
        this.name=name;
    }
}

let student1=new User("prashant","pra@gmail.com");
let student2=new User("makhan","makhan@gmail.com");

let admin=new Admin("kola","kola@gmail.com");