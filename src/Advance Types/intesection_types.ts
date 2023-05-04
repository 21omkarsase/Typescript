type Frontend = {
    react_version: number;
    typescript_version: number;
}

type Backend = {
    node_version: number;
    express_version: number;
}

//we can do this also using interfaces 
type Fullstack = Frontend & Backend;
// type Fullstack = Frontend | Backend;

const developer1: Fullstack = {
    react_version: 18,
    typescript_version: 16,
    node_version: 16,
    express_version: 10
}

console.log(developer1);


//type intersection

type Comb1 = string | number;
type Comb2 = number | boolean;

type result = Comb1 & Comb2;
// type result = Comb1 | Comb2;

const result1: result = 404631

console.log(result1);



