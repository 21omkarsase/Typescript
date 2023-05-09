const AutoBind = (_1: any, _2: string, descriptor: PropertyDescriptor) => {
    const originalMethod = descriptor.value;
    const adjDescriptor: PropertyDescriptor = {
        configurable: true,
        enumerable: false,
        get() {
            const boundFn = originalMethod.bind(this);
            return boundFn;
        },
    }
    console.log(adjDescriptor);

    return adjDescriptor;
}


class Printer {
    message = "Working...";

    @AutoBind
    showMessage() {
        console.log(this.message);
    }
}

const pr = new Printer();

const button = document.getElementById("btn")!;
button.addEventListener("click", pr.showMessage)

