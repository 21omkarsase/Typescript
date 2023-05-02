abstract class Department {
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

    abstract describe(this: Department): void;
}

class Comps extends Department {
    private reports: string[];

    static branch_name: string;

    static instance: Comps;

    //after declaring constructor as a private constructor 
    //We cant create class instances from outside the class using new

    private constructor(Id: string, name: string, company: string, employees: { name: string, age: number }[], private admins: string[], branch_name: string = "Computer") {
        super(Id, name, company, employees);
        this.reports = [];
        Comps.branch_name = branch_name;
    }

    static getInstance() {
        if (this.instance) {
            return this.instance;
        }
        return this.instance = new Comps("c1", "Comps", "PCE", [], ["omkar"]);
    }

    describe(this: Department): void {               //THIS HAS BECAME MANDATORY METHOD BECAUSE OF ABSTRACT DECLARATION IN PARENT CLASS
        console.log("describe", "COMPS DEPARTMENT");
    }

    static changeBranchName(branch_name: string) {
        this.branch_name = branch_name
    }

    private getReportsLength(this: Comps) {
        return this.reports.length;
    }

    get getReports() {
        return this.reports;
    }

    set addReport(text: string) {
        this.reports.push(text);
        console.log("reports length ", this.getReportsLength());
    }

    addEmployee(employee: { name: string, age: number }) {
        console.log("Default branch name", Comps.branch_name);

        console.log("comps class");

        this.employees.push(employee);
    }

    getAdmins(this: Comps) {
        return this.admins;
    }
}


//singleton pattern :
// When we want to create only one instance of the class 

const comps1: Comps = Comps.getInstance();

const comps2: Comps = Comps.getInstance();

console.log(comps1 === comps2);


