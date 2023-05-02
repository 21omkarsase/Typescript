// Array with const must be intialized
const MI_Openers = ["Rohit", "Omkar"]

// let ar: any = [1, "2323"]
let MI_Squad: string[] = [];
MI_Squad.push("Rohit");

// //will throw an error --> MI_Squad.push(3) 


const team: {
    team_name: string,
    squad: string[],
} = {
    team_name: "Mumbai Indians",
    squad: [...MI_Squad, "Ishan", "Sky", "David", "Tilak", "Green"]
}

console.log("Openers", MI_Openers);
console.log("Squad", MI_Squad);
console.log("Team", team);

// // will cause error --> console.log(team.value);  


