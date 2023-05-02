const combine = (input1: number | string, input2: number | string, dType: "numType" | "stringType") => {
    let result: number | string;

    if (typeof input1 === "number" && typeof input2 === "number" || dType === "numType")
        result = +input1 + +input2;

    else if (typeof input1 === "string" && typeof input2 === "string" || dType === "stringType")
        result = input1.toString().toUpperCase() + input2.toString().toUpperCase();
    else result = "Error";


    return result;
}

const addNums = combine(404, 631, "numType");
console.log("add nums", addNums);


const addStrings = combine("404", "631", "stringType");
console.log("add strings", addStrings);

console.log("error 1", combine(404, "0", "numType"));
console.log("error 2", combine("0", 631, "stringType"));

// console.log("hello")
