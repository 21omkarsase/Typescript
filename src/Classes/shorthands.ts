class Department {
    // private Id : string;
    // private name: string;
    // public company : string;
    private employees: { name: string; age: number }[];

    constructor(private Id: string, private name: string, public company: string, employees: { name: string, age: number }[]) {
        // this.Id = Id;
        // this.name = name;
        // this.company= company;
        this.employees = employees;
    }

    private getEmployeeNumber(this: Department) {
        return this.employees.length;
    }

    getDepartmentName(this: Department) {
        return "department name" + " " + this.name;
    }

    getDepartmentId(this: Department) {
        return this.Id;
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

const coding = new Department("C1", "Coding", "WINNERS.AI", []);

console.log(coding.getDepartmentName());

// console.log(coding.employees);       can't access private properties directly


coding.addEmployee({ name: "Omkar Sase", age: 21 })
coding.addEmployee({ name: "Harsh Alashi", age: 21 })

const codingEmployees = coding.getEmployees();

console.log(`Employees working in ${coding.company} under ${coding.getDepartmentName()} department (${coding.getDepartmentId()}) `);
codingEmployees.map((employee, Idx) => {
    console.log(Idx, " : ", employee.name, " --> ", employee.age);
})
