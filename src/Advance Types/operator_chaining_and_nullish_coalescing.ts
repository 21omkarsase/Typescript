const data = {
    id: "1",
    name: "my_name",
    // job: { title: "CEO" }
}

console.log(data?.job?.title);  // will not give an error


//for null and undefined values

const userInput = "";

const data1 = userInput || "Default"; // won't work for ""

console.log("data 1", data1);


const data2 = userInput ?? "default";

console.log("data 2", data2);
