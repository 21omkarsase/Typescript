interface ValidatorConfig {
    [property: string]: {
        [validateProperty: string]: string[];
    };
}

const registeredValidators: ValidatorConfig = {};

const required = (target: any, propName: string) => {
    registeredValidators[target.constructor.name] = {
        ...registeredValidators[target.constructor.name],
        [propName]: ['required']
    }
}

const positiveNumber = (target: any, propName: string) => {
    registeredValidators[target.constructor.name] = {
        ...registeredValidators[target.constructor.name],
        [propName]: ['positive']
    }
}

const validate = (obj: any) => {
    const objValidatorConfig = registeredValidators[obj.constructor.name];
    if (!objValidatorConfig) {
        return true;
    }

    for (const prop in objValidatorConfig) {
        for (const validate of objValidatorConfig[prop]) {
            switch (validate) {
                case "required":
                    if (obj[prop] === "") {
                        console.log(prop);
                        return false;
                    }

                case "positive":
                    console.log(prop);
                    if (obj[prop] <= 0) {
                        return false;
                    }
            }
        }
    }
    return true;
}


class Course {
    @required
    public title: string;
    @positiveNumber
    public price: number;

    constructor(title: string, price: number) {
        this.title = title;
        this.price = price;
    }

}

const courseForm = document.querySelector("form")!;

courseForm.addEventListener("submit", event => {
    event.preventDefault();
    const titleEle = document.getElementById("title") as HTMLInputElement;
    const priceEle = document.getElementById("price") as HTMLInputElement;

    const title = titleEle.value;
    const price = +priceEle.value;

    const createdCourse = new Course(title, price);

    if (!validate(createdCourse)) {
        alert("Invalid input, please try again");
        return;
    }
    console.log("course", createdCourse);
})
