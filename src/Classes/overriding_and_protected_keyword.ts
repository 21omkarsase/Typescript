class Department {
    constructor(private readonly Id: string, private name: string, public company: string, protected employees: { name: string, age: number }[]) {
    }
    //making employees protected. to access it in it's child classes

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
        console.log("dep class");

        this.employees.push(employee);
    }

    getEmployees() {
        const employeeNumber = this.getEmployeeNumber();
        console.log("Total number of employees : ", employeeNumber);

        return this.employees;
    }
}

class Comps extends Department {
    private reports: string[];

    constructor(Id: string, name: string, company: string, employees: { name: string, age: number }[], private admins: string[]) {
        super(Id, name, company, employees);
        this.reports = [];
    }

    private getReportsLength(this: Comps) {
        return this.reports.length;
    }

    addEmployee(employee: { name: string, age: number }) {
        console.log("comps class");

        this.employees.push(employee);
    }

    addReport(this: Comps, text: string) {
        this.reports.push(text);
        console.log("Comps total reports : ", this.getReportsLength());
    }

    getAdmins(this: Comps) {
        return this.admins;
    }
}

const general1: Department = new Department("g1", "General", "PCE", []);

// const COMPS = new Comps("c1", "Comps", "PCE", []); we can directly do this if Comps doesn't have constructor.

console.log(general1.getDepartmentName());

const comps1: Comps = new Comps("c1", "Comps", "PCE", [], ["omkar"]);

comps1.addReport("This is a comps report")

const comps1Admins: string[] = comps1.getAdmins();

console.log(comps1Admins);

console.log(comps1.getDepartmentId);

comps1.addEmployee({ name: "Lord", age: Infinity });

const compsEmployees: { name: string, age: number }[] = comps1.getEmployees();
console.log("comps employees : ", compsEmployees);

