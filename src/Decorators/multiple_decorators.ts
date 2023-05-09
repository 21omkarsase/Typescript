//Decorator factory functions will be executed from top to bottom
//For actual decorator function :
// bottom most decorator will be executed first and then above in bottom to top approach

const Logger = (logString: string) => {
    console.log(1);
    console.log("Log String", logString);
    return (constructor: Function) => {
        console.log("Loading");
        console.log("constructor", constructor, typeof constructor);
    }
}

const withTemplate = (template: string, hookId: string, logString: string) => {
    console.log(2);
    console.log("Log String", logString);
    return (constructor: any) => {
        const hookEl = document.getElementById(hookId);
        const p1 = new constructor();
        console.log("p1", p1);
        if (hookEl) {
            hookEl.innerHTML = template;
            document.getElementById(hookId)!.innerHTML = "<h1>Omkar</h1>";
        }
    }
}

@Logger("logger decorator")
@withTemplate("<h1>My name is Omkar Sase<h1/>", "name", "withTemplate decorator")
class Person {
    public name: string = "OMKAR";

    constructor() {
        console.log("Constructor function");
    }
}