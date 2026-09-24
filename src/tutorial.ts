interface Person {
    name: string
}

interface DogOwner extends Person {
    dogName: string
}

interface Manager extends Person {
    managePeople(): void
    delegateTasks(): void
}

type Employee = Person | DogOwner | Manager

const getEmployee = (): Employee => {
    const random = Math.random()
    if (random < 0.33) {
        return { name: "stas" }
    } else if (random < 0.66) {
        return { name: "anastasiia", dogName: "mika" }
    }
    return {
        name: "ivan",
        managePeople() {
            console.log("Managing people...")
        },
        delegateTasks() {
            console.log("Delegating tasks...")
        },
    }
}

const employee: Employee = getEmployee()
console.log(employee)
