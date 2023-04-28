enum Role {
    ADMIN = "admin",
    MEMBER = "member",
}

const person: {
    name: string;
    age: number;
    role: string
} = {
    name: "Omkar",
    age: 21,
    role: Role.ADMIN
}

console.log("Role", Role);
console.log("Person", person);
