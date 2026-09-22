class hello{
    constructor(){
        console.log("hello const");
    }
}

class hi extends hello{
    constructor(){
        super();
        console.log("hello")
    }
}

let s = new hi();