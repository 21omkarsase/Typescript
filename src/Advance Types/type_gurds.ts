type Frontend = {
    react_version: number;
    typescript_version: number;
}

type Backend = {
    node_version: number;
    express_version: number;
}

type Fullstack = Frontend | Backend;

const dev1: Fullstack = {
    node_version: 16,
    express_version: 19,
}

const getDevData = (dev: Fullstack): void => {
    // can't access using dev.react_version
    if ("react_version" in dev)
        console.log(dev);
}

getDevData(dev1);


class Truck {
    drive() {
        console.log("Driving truck");
    }
}

class Vehicle {
    drive() {
        console.log("Driving a vechicle");
    }

    fly() {
        console.log("Flying a vehicle");
    }
}

const obj1 = new Truck();
const obj2 = new Vehicle();

type Comb = Vehicle | Truck;

const vehicleActivities = (v: Comb) => {
    v.drive();
    // v.fly()  error

    // if ("fly" in v)
    //     v.fly();

    // or 

    if (v instanceof Vehicle) {
        v.fly();
    }
}

vehicleActivities(obj1)
vehicleActivities(obj2)

