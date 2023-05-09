const Logger = (constructor: Function) => {
    console.log("Loading");
    console.log("constructor", constructor);
}


@Logger
class Person {
    public name: string = "OMKAR";

    constructor() {
        console.log("Constructor function");
    }
}

const person1 = new Person();

