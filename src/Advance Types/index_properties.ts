// when we don't know exact property names

interface ErrorContainer {
    [prop: string]: string;
    // id: number;  not allowed (only string type variables are allowed)
}

const emailError: ErrorContainer = {
    email: "Please enter a valid email",
}

const error: ErrorContainer = {
    email: "Please enter a valid email",
    username: "Username must be in range of  8 - 10 characters"
}

console.log(error);
