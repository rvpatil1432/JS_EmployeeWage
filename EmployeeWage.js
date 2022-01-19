
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS = 20;
const MAX_HRS_IN_MONTH = 160;
let empDailyWageArr = new Array();
let empDailyWageMap = new Map();
let empDailyHrsMap = new Map();
let fullWorkingDays = new Array();
let partWorkingDays = new Array();
let nonWorkingDays = new Array();

function getWorkingHours(empCheck) {
    switch (empCheck) {
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return 0;
    }
}
/** function for calculating daily wage */
function calculateDailyWage(empHrs) {
    return empHrs * WAGE_PER_HOUR;
}
let totalEmpHrs = 0;
let totalWorkingDays = 0;
while (totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let empHrs = getWorkingHours(empCheck);
    totalEmpHrs += empHrs;
    let dailyWage = calculateDailyWage(empHrs);
    empDailyWageArr.push(dailyWage);
    empDailyWageMap.set(totalWorkingDays,dailyWage);
    empDailyHrsMap.set(totalWorkingDays,empHrs);
}
let empWage = totalEmpHrs * WAGE_PER_HOUR;
console.log("Total Days:" + totalWorkingDays + "," + " Total Hours:" + totalEmpHrs );
 console.log("Employee Wage: " + empWage + "," + "Daily Wages: " + "[" + empDailyWageArr + "]");
 //Array Helper Functions
//7A Calculate total wage using array forEach 
let totalWage = 0;
function sum(dailyWage) {
    totalWage += dailyWage;
}
empDailyWageArr.forEach(sum);
console.log("7A Total wage : " + totalWage);

//7A Calculate total wage using reduce method
function totalWages(sum, nextValue) {
    return sum + nextValue;
}
let sum1 = empDailyWageArr.reduce(totalWages, 0);
console.log("7A Total wage : " + sum1);

//7B show the day along with daily wage using ArrayMap
let counter = 0;
function mapDayWithDailyWage(dailyWage){
    counter++;
    return counter + "=" + dailyWage;
}
let mapWithDailyWageArr = empDailyWageArr.map(mapDayWithDailyWage);
console.log("7B : " + mapWithDailyWageArr);

//7C Show days when full time wage of 160 were earned using filter
let fullTimeWage = function (dailyWage){
    return dailyWage.toString().includes("160");
}
let fullDayWageArr = empDailyWageArr.filter(fullTimeWage);
console.log("7C : " + fullDayWageArr);

//7D find first occurence when full time wage earned using find function
let fullDayWageFirstOccurence = empDailyWageArr.find(fullTimeWage);
console.log("7D : " + fullDayWageFirstOccurence);

//7E check if every element of full time wage is truely holding Full time wage
console.log("7E : " + fullDayWageArr.every(fullTimeWage));

//7F Check if there is any part time wage
let partTimeWage = function (dailyWage){
    return dailyWage.toString().includes("80");
}
console.log("7F : " + mapWithDailyWageArr.some(partTimeWage));

//7G Find the number of days employee worked
function totalDaysWorked(numOfDays, dailyWage) {
    if (dailyWage > 0)
        return numOfDays + 1;
    return numOfDays;
}
let numOfWorkingDays = empDailyWageArr.reduce(totalDaysWorked, 0);
console.log("7G Total number of days employee worked :" + numOfWorkingDays);

//Use Case  8 to Store employee wage in map as key is day and value as a employee wage. 
console.log("Day Wise Employee Wage");
for (let [key,value] of empDailyWageMap){
console.log(+key+ " - " +value);
}

console.log("Total wage using reduce method :" + Array.from(empDailyWageMap.values()).reduce(totalWages, 0));

let totalWagesUsingMap = 0;
function totalWagesMap(dailyWage) {
    totalWagesUsingMap += dailyWage;
}
Array.from(empDailyWageMap.values()).map(totalWagesMap)
console.log("Total wage using map method :" + totalWagesUsingMap);

//UC9 Use  daily wage map and daily hour map - Arrow functions use
//9A EMployee total wage and total hours worked
let findTotal = (totalWage, dailyWage) => {
    return totalWage += dailyWage;
}
console.log("Total Wage using Arrow function by creating function findTotal :"
    + Array.from(empDailyWageMap.values())
        .reduce(findTotal, 0));

console.log("Total Wage using Arrow function without using user defined function :"
    + Array.from(empDailyWageMap.values())
        .filter(dailyWage => dailyWage > 0)
        .reduce((total, next) => total + next));

console.log("Total hours using arrow function by creating function findTotal  :"
    + Array.from(empDailyHrsMap.values())
        .reduce(findTotal, 0));

console.log("Total hours using arrow function without using user defined function :"
    + Array.from(empDailyHrsMap.values())
        .reduce((total, next) => total + next));

//9B get full, part, and non working days
empDailyHrsMap.forEach((value, key) => {
    if (value == 8)
        fullWorkingDays.push(key);
    else if (value == 4)
        partWorkingDays.push(key);
    else nonWorkingDays.push(key);
});
console.log("Full Working Days :" + fullWorkingDays);
console.log("Part Working Days :" + partWorkingDays);
console.log("Non Working Days :" + nonWorkingDays);