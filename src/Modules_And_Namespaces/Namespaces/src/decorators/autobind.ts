namespace App {
    //autobind decorator
    export const autoBind = (_1: any, _2: string, descriptor: PropertyDescriptor) => {
        const originalMethod = descriptor.value;

        const adjustedDecorator: PropertyDescriptor = {
            configurable: true,
            enumerable: true,
            get() {
                const boundFun = originalMethod.bind(this);
                return boundFun;
            },
        }

        return adjustedDecorator;
    }
}