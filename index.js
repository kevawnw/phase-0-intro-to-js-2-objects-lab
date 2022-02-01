const employee = {name: "kev", streetAddress: "pelham"} 

function updateEmployeeWithKeyAndValue(employee, name, kev) {
    return {...employee, [name]: kev}
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, name, kev) {
    employee.name = "Sam"
    employee.streetAddress = "12 Broadway"
    return employee; 
}

function deleteFromEmployeeByKey(employee, name) {
    let newEmployee = {...employee}
    delete newEmployee.name
    return newEmployee
}

function destructivelyDeleteFromEmployeeByKey(employee, name) {
    console.log(employee)
    delete employee[name]
    console.log(employee)
    return employee;
}

