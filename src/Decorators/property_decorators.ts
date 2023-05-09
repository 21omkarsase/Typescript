const Prop = (constructor: any) => {
    console.log("Class Decorator", constructor, typeof constructor);
}

const Price = (target: any, propertyName: string | Symbol) => {
    console.log("Price Decorator", target, propertyName, typeof target);
}

const Title = (target: any, propertyName: string | Symbol) => {
    console.log("Title Decorator", target, propertyName, typeof target);
}

@Prop
class Product {
    @Price
    public title: string;
    @Title
    private price: number;

    get getPrice() {
        return this.price;
    }

    set setPrice(val: number) {
        if (val > 0) {
            this.price = val;
        } else {
            throw new Error("Invalid price");
        }
    }

    constructor(t: string, p: number) {
        this.title = t;
        this.price = p;
    }

    getPriceWithTax(tax: number) {
        return this.price + tax;
    }
}

const p1 = new Product("Product 1", 100);

console.log(p1.getPriceWithTax(120));

console.log(p1.getPrice);


p1.setPrice = 200;
console.log(p1.getPrice);
