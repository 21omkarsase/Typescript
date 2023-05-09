const add = (num1: number, num2: number, cb: (num: number) => void) => {
    const result = num1 + num2
    cb(result);
}


let add1: (a: number, b: number, cb: (num: number) => void) => void;
add1 = add;

add1(404, 631, (result: number) => {
    console.log("Result", result);
});