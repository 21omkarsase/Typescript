const withTemplate = (template: string, hookId: string) => {
    // return (_: Function) => { //_ --> indicates that we are not going to use this parameter
    return (constructor: any) => {
        console.log(typeof constructor);
        const hookEl = document.getElementById(hookId);
        const p1 = new constructor();
        console.log("p1", p1);
        if (hookEl) {
            hookEl.innerHTML = template;
            document.getElementById(hookId)!.innerHTML = "<h1>Omkar</h1>";
        }
    }
}

@withTemplate("<h1>My name is Omkar Sase<h1/>", "name")
class Person {
    public name: string = "OMKAR";

    constructor() {
        console.log("Constructor function");
    }
}