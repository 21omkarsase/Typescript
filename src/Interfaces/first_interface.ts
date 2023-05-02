interface Person { //used to describe how object should look like
    name: string,
    age: number,

    greet(phrase: string): void;
}

const person1: Person = {
    name: "O S",
    age: 21,
    greet(phrase) {
        console.log(phrase, this.name);
    },
}

const person2: Person = {
    name: "N B",
    age: 20,
    greet(phrase) {
        console.log(phrase, this.name);
    },
}

console.log("person1", person1);

person1.greet("Hello!")
person2.greet("Hello!")
