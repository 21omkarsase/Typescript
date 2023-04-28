const combine = (input1: number | string, input2: number | string, type: "num" | "string") => {
    let result: number | string;

    if (typeof input1 === "number" && typeof input2 === "number" || type === "num")
        result = +input1 + +input2;

    else if (typeof input1 === "string" && typeof input2 === "string" || type === "string")
        result = input1.toString().toUpperCase() + input2.toString().toUpperCase();
    else result = "Error";


    return result;
}

const addNums = combine(404, 631, "num");
console.log("add nums", addNums);


const addStrings = combine("404", "631", "string");
console.log("add strings", addStrings);

console.log("error 1", combine(404, "0", "num"));
console.log("error 2", combine("0", 631, "string"));

