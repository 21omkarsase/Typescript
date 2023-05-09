const WithTemplate = (template: string, hookId: string) => {
    return <T extends { new(...args: any[]): { title: string } }>(originalConstructor: T) => {
        return class extends originalConstructor {
            constructor(..._: any[]) {
                super();
                console.log("Rendering template");
                const hookEle = document.getElementById(hookId);
                if (hookEle) {
                    hookEle.innerHTML = template;
                }
            }
        }
    }
}


@WithTemplate("<h1>Typescript is Beautiful</h1>", "name")
class Product {
    public title: string;
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