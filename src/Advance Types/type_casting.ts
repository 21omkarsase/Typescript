// const userInput = document.getElementById("user_input")  //error :userInput may possibly have null value

const userInput = document.getElementById("user_input")! //resolved null error but ts doesn't consider it as input element type instead it consider it as html element only 

const userInput2 = <HTMLInputElement>document.getElementById("user_input2")!
const userInput3 = document.getElementById("user_input3")! as HTMLInputElement


userInput2.value = "Hello"


// WITHOUT USING !

const userInput4 = document.getElementById("user_input4")

if (userInput4) {
    (userInput4 as HTMLInputElement).value = "Hello"
}