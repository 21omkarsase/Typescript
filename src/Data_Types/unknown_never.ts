let userInput: unknown;
let userName: string;

userInput = 4;
userName = "Omkar";

userInput = userName;

//can't do this way directly : -->
// userName = userInput
//can do directly if userInput : any

if (typeof userInput === "string")
    userName = userInput


const generateError = (message: string, code: number): never => {
    throw new Error(code + message);
}

generateError("Error occurred...", 400);