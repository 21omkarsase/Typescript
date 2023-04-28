var userInput;
var userName;
userInput = 4;
userName = "Omkar";
userInput = userName;
//can't do this way directly : -->
// userName = userInput
//can do directly if userInput : any
if (typeof userInput === "string")
    userName = userInput;
var generateError = function (message, code) {
    throw new Error(code + message);
};
generateError("Error occured...", 400);
