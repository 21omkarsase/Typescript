class Department {
    name: string;
    private employees: { name: string; age: number }[];

    constructor(name: string) {
        this.name = name;
        this.employees = [];
    }

    private getEmployeeNumber(this: Department) {
        return this.employees.length;
    }

    getDepartmentName(this: Department) {
        return "department name" + " " + this.name;
    }

    addEmployee(employee: { name: string; age: number; }) {
        this.employees.push(employee);
    }

    getEmployees() {
        const employeeNumber = this.getEmployeeNumber();
        console.log("Total number of employees : ", employeeNumber);

        return this.employees;
    }
}

const coding = new Department("Coding")

console.log(coding.getDepartmentName());

// console.log(coding.employees);       can't access private properties directly


coding.addEmployee({ name: "Omkar Sase", age: 21 })
coding.addEmployee({ name: "Harsh Alashi", age: 21 })

const codingEmployees = coding.getEmployees();

for (const employee of codingEmployees) {
    console.log("Coding Employee", employee.name);
}
