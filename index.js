// Write your solution in this file!
const employee = {
    name : "name",
    streetAddress : "road",
}
function updateEmployeeWithKeyAndValue(employeeObject, key, value){
    employeeObject = {...employee};
    employeeObject[key] = value;
    return employeeObject;
}
function  destructivelyUpdateEmployeeWithKeyAndValue(employeeObject, key, value){
    employee[key] = value;
    return employee;
    
}
function  deleteFromEmployeeByKey(employeeObject, key){
    employeeObject = {...employee};
    delete employeeObject[key];
    return employeeObject;
}
function destructivelyDeleteFromEmployeeByKey(employeeObject, key){
    delete employee[key]
    return employee
}