const combine = <T extends object, U>(obj1: T, obj2: U) => {
    return Object.assign(obj1, obj2);
}
const data = combine({ name: "OMKAR", age: 21 }, { age: 20 })

console.log(data);

const reverseArray = <T>(arr: T[]): T[] => {
    return arr.reverse();
}

console.log(reverseArray([1, 2, 3, 4]));
console.log(reverseArray(["n", "o"]));
