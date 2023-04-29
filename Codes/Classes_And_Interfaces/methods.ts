class Department {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    getDepartmentName(this: Department) {
        return "department name" + this.name;
    }
}

const coding = new Department("Coding")

console.log(coding.getDepartmentName());

// const accountingCopy = { getDepartmentName: coding.getDepartmentName }

// accountingCopy.getDepartmentName();
