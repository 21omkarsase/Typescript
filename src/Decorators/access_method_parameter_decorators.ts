const Prop = (constructor: any) => {
    console.log("Class Decorator", constructor, typeof constructor);
}

const Price = (target: any, propertyName: string | Symbol) => {
    console.log("Price Decorator", target, propertyName, typeof target);
}

const Title = (target: any, propertyName: string | Symbol) => {
    console.log("Title Decorator", target, propertyName, typeof target);
}

const AccessorLog = (target: any, name: string, descriptor: PropertyDescriptor) => {
    console.log("Accessor Decorator");
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

const MethodLog = (target: any, name: string, descriptor: PropertyDescriptor) => {
    console.log("Accessor Decorator");
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

const ParameterLog = (target: any, name: string | Symbol, position: number) => {
    console.log("Parameter Decorator");
    console.log(target);
    console.log(name);
    console.log(position);
}

@Prop
class Product {
    @Price
    public title: string;
    @Title
    private price: number;

    @AccessorLog
    get getPrice() {
        return this.price;
    }

    @AccessorLog
    set setPrice(@ParameterLog val: number) {
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

    @MethodLog
    getPriceWithTax(@ParameterLog tax: number) {
        return this.price + tax;
    }
}

const p1 = new Product("Product 1", 100);

console.log(p1.getPriceWithTax(120));

console.log(p1.getPrice);


p1.setPrice = 200;
console.log(p1.getPrice);
