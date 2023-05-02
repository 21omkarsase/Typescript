interface GeneralActions {
    live(): void;
}

interface SpecialActions extends GeneralActions {
    sleep(duration: number): void;
}


class Student implements SpecialActions {

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
