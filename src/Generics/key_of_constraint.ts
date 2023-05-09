const extractAndConvert = <T, U extends keyof T>(obj: T, key: U): string => {
    return "value " + obj[key]; // only accept values as key present
}

console.log(extractAndConvert({ name: "OMKAR" }, "name"));