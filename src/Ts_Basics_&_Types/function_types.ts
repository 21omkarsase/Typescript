const add = (num1: number, num2: number): number => {
    return num1 + num2;
}

const combine = (str1: string, str2: string): string => {
    return str1 + str2;
}


let add1: Function;
add1 = add;
// now we can't assign non-function thing to add1
// add1 = 5
console.log(add1(404, 631));


let combine1: (a: string, b: string) => string;

// will cause error. Now we can't assign some other function to combine1 : -->
// combine1 = add;
combine1 = combine;

console.log(combine("abc", "xyz"));
