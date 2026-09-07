type Employee = { id: number; name: string; department: string }
type Manager = { id: number; name: string; employees: Employee[] }
type Staff = Employee | Manager

function printStaffDetails(staff: Staff): void {
    if ("employees" in staff) {
        console.log(
            `${staff.name} is a manager that is the boss of ${staff.employees.length} employees`,
        )
    } else {
        console.log(
            `${staff.name} is an employee in the ${staff.department} department`,
        )
    }
    console.log()
}

const employee1: Employee = { id: 1, name: "Alice", department: "IT" }
const employee2: Employee = { id: 2, name: "Steve", department: "PR" }
const manager: Manager = {
    id: 3,
    name: "Kate",
    employees: [employee1, employee2],
}

printStaffDetails(employee1)
printStaffDetails(manager)
