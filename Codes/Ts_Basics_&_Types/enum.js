var Role;

(function (Role) {
    Role["ADMIN"] = "admin";
    Role["MEMBER"] = "member";
})(Role || (Role = {}));

var person = {
    name: "Omkar",
    age: 21,
    role: Role.ADMIN
};

console.log("Role", Role);
console.log("Person", person);
