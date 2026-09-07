function createEmployee({ id }: { id: number }): {
    id: number
    isActive: boolean
} {
    return { id, isActive: id % 2 === 0 }
}

const first = createEmployee({ id: 1 })
const second = createEmployee({ id: 2 })

console.log(first, second)

// alternative
function createStudent(student: { id: number; name: string }): void {
    console.log(
        `Welcome to the course, ${student.name.toUpperCase()}. Your id is: ${student.id}`,
    )
}

const newStudent = { id: 20, name: "Anastasiia" }
console.log(createStudent(newStudent))
