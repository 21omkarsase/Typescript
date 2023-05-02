interface GeneralActions {
    live(): void;
    eat?(): void //optional method
}

interface SpecialActions extends GeneralActions {
    sleep(duration: number): void;
}

interface Data {
    name: string;
    age?: number; // optional property
}

class Student implements SpecialActions {
    name?: string;  // here also we should mark it as optional

    constructor(name?: string) {  //here also
        if (name) {
            this.name = name;
        }
    }

    live(this: Student) {
        console.log("Living...");
    }

    sleep(this: Student, duration: number) {
        console.log("Sleeping for ", duration, "Hours daily");
    }
}

const user1: Student = new Student();

user1.live();
user1.sleep(5);
