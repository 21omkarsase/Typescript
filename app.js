var extractAndConvert = function (obj, key) {
    return "value " + obj[key];
};
console.log(extractAndConvert({ name: "OMKAR" }, "name"));
