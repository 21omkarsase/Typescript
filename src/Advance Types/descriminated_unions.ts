//***************** Discriminated Union Types 
interface Bird {
    type: "BIRD";
    flyingSpeed: number;
}

interface Horse {
    type: "HORSE";
    runningSpeed: number;
}

type Animal = Bird | Horse;

const calculateSpeed = (animal: Animal): number => {
    let speed: number = 0;
    if (animal.type === "BIRD")
        speed = animal.flyingSpeed;
    else if (animal.type === "HORSE")
        speed = animal.runningSpeed;
    return speed;
}

console.log(calculateSpeed({ type: "BIRD", flyingSpeed: 10 }));
console.log(calculateSpeed({ type: "HORSE", runningSpeed: 20 }));
