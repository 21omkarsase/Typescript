const combine = <T extends object, U extends object>(obj1: T, obj2: U) => {
    return Object.assign(obj1, obj2);
}

const data = combine({ name: "OMKAR", age: 21 }, { age: 20 })
// const data2 = combine({ name: "OMKAR", age: 21 }, 10)

console.log(data);
// console.log(data2);