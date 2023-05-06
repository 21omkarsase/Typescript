const extractAndConvert = <T, U extends keyof T>(obj: T, key: U): string => {
    return "value " + obj[key];
}

console.log(extractAndConvert({ name: "OMKAR" }, "name"));