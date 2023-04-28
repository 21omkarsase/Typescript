var add = function (num1, num2, cb) {
    var result = num1 + num2;
    cb(result);
};
var add1;
add1 = add;
add1(404, 631, function (result) {
    console.log("Result", result);
});
