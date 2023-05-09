const Logger = (logString: string) => {
    console.log(logString);
    return (constructor: Function) => {
        console.log("Loading");
        console.log("constructor", constructor);
    }
}


@Logger("DECORATOR")
class Person {
    public name: string = "OMKAR";

    constructor() {
        console.log("Constructor function");
    }
}

const person1 = new Person();

