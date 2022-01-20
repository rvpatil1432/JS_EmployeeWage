
class EmployeePayrollData {
    //property
    id;
    salary;

    //constructor
    constructor(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    //getter and setter method
    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name;
    }

    //method
    toString() {
        return "id =" + this.id + ", name = " + this.name + ", salary = " + this.salary;
    }
}
let employeePayrollData = new EmployeePayrollData(1, "Rohini", 500000);
console.log(employeePayrollData);
employeePayrollData.name = "Neeta";
console.log(employeePayrollData.toString());