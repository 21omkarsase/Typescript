// class DataStorage<T extends string | number | boolean>{
class DataStorage<T>{
    private data: T[] = [];

    addItem(item: T) {
        this.data.push(item);
    }

    removeItem(item: T) {
        if (this.data.indexOf(item) !== -1) {
            this.data.splice(this.data.indexOf(item), 1);
        }
    }

    getItems() {
        return this.data;
    }
}

const primeNumbers = new DataStorage<number>();
const branches = new DataStorage<string>();
const data = new DataStorage<object>();

primeNumbers.addItem(2);
primeNumbers.addItem(31);
primeNumbers.addItem(93);
console.log(primeNumbers.getItems());

branches.addItem("Computer")
branches.addItem("IT")
branches.addItem("Mechanical")
console.log(branches.getItems());

data.addItem({ name: "O", age: 21 })
data.addItem({ name: "N", age: 20 })
const odd = { name: "UNKNOWN", age: 20 }
data.addItem(odd)
data.removeItem(odd)
console.log(data.getItems());


