interface Greetable {
    readonly name: string,

    greet(phrase: string): void;
}

interface Actions {
    eat(): void;
    sleep(duration: number): void;
}

abstract class Person {
    constructor(public profession: string) { }

    abstract live(this: Person): void;
}

class Student extends Person implements Greetable, Actions {
    constructor(public name: string, profession: string) {
        super(profession);
    }

    // changeName(this: Person, name: string) {
    //     this.name = name;  // not allowed because of readonly mode
    // }

    greet(this: Student) {
        console.log(this.name);
    }

    eat(): void {
        console.log("Eating...");
    }

    sleep(duration: number): void {
        console.log("Sleep duration", duration);
    }

    live(this: Student) {
        console.log(this.name, "Living...");
    }
}

const user1: Student = new Student("OMKAR SASE", "Student");

user1.greet();
user1.eat();
user1.sleep(5);
user1.live();

user1.name = "Omkar sase"