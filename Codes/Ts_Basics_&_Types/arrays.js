var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Array with const must be intialized
var MI_Openers = ["Rohit", "Omkar"];
// let ar: any = [1, "2323"]
var MI_Squad = [];
MI_Squad.push("Rohit");
// //will throw an error --> MI_Squad.push(3) 
var team = {
    team_name: "Mumbai Indians",
    squad: __spreadArray(__spreadArray([], MI_Squad, true), ["Ishan", "Sky", "David", "Tilak", "Green"], false)
};
console.log("Openers", MI_Openers);
console.log("Squad", MI_Squad);
console.log("Team", team);
// // will cause error --> console.log(team.value);  
