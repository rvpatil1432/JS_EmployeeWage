
class EmployeePayrollData {
    //property
    id;
    salary;
    gender;
    startDate;

    //constructor
    constructor(id, name, salary,gender,startDate) {
        this.id = id;
        this.name = name;
        this.salary = salary;
        this.gender = gender;
        this.startDate = startDate;
    }

    //getter and setter method
    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name;
    }
    get startDate() {
        return this._startDate;
    }
    set startDate(startDate) {
        this._startDate = startDate;
    }
    //method
    toString() {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const empDate = this.startDate === undefined ? "undefined" :
            this.startDate.toLocaleDateString("en-US", options);
        return "id =" + this.id + ", name = " + this.name + ", salary = " + this.salary + ", gender = " + this.gender + ", startDate = " + empDate;
    }
}
let employeePayrollData = new EmployeePayrollData(1, "Rohini", 500000);
console.log(employeePayrollData);
employeePayrollData.name = "Neeta";
console.log(employeePayrollData.toString());
let newEmployeePayrollData = new EmployeePayrollData(2, "Terissa", 400000, "F", new Date());
console.log(newEmployeePayrollData.toString()); 