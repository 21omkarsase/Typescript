const student: object = {
    name: "Omkar Sase",
    age: 20
}

console.log("Student", student);

const person: {
    name: string;
    age: number;
} = {
    name: "Omkar Sase",
    age: 20
};

console.log("Person", person)

type objType = {
    name: string;
    age: number;
    college: string;
}

const obj1: objType = {
    name: "Omkar Sase",
    age: 21,
    college: "PCE"
}