interface AddNumbers {
    (num1: number, num2: number): number;
}

let add: AddNumbers;

add = (num1: number, num2: number) => {
    return num1 + num2;
}

console.log(add(3, 2));
