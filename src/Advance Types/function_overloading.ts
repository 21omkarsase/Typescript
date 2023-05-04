type type1 = number | string;

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: string, b: number): string;
function add(a: number, b: string): string;
function add(a: type1, b: type1) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}

console.log(add("O", 404));
console.log(add("N", 631));
console.log(add(10, 20));
console.log(add("O", "N"));


const str = add("O", "N")

// console.log(str.split("")); without function overload return type of add --> string | number
// therefor we can't use split even if it is returning a string

// after function overloading
console.log(str.split(""));



