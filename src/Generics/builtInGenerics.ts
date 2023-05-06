// Generics in TypeScript are a powerful feature that allows you to define reusable and type - safe components or functions.
// Generics enable you to create components or functions that can work with a variety of data types, while still providing type checking and maintaining type safety.

const primes: Array<number> = [2, 3, 5, 7];

const promise: Promise<string> = new Promise((resolve, reject) => {
    if (true) {
        setTimeout(() => {
            resolve("hello n")
        }, 2000);
    }
    else reject("hello n")


});

const getData = async () => {
    const data = await promise;
    console.log(data);
}

getData();