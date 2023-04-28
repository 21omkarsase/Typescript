var combine = function (input1, input2) {
    var result;
    if (typeof input1 === "number" && typeof input2 === "number")
        result = input1 + input2;
    else if (typeof input1 === "string" && typeof input2 === "string")
        result = input1.toUpperCase() + input2.toUpperCase();
    else
        result = "Error";
    return result;
};
var addNums = combine(404, 631);
console.log("add nums", addNums);
var addStrings = combine("404", "631");
console.log("add strings", addStrings);
console.log("error 1", combine(404, "0"));
console.log("error 2", combine("0", 631));
