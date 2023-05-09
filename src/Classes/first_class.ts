"use strict";
class Department {
    public name: string;

    constructor(name: string) {
        this.name = name;
    }
}
const accounting = new Department("Accounting");
console.log("acc class", accounting);
