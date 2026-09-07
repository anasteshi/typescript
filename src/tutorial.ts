function processInput(input: number | string) {
    if (typeof input === "number") {
        // type guard – checks the type of a parameter at the runtime
        console.log(input * 2)
    } else {
        console.log(input.toUpperCase())
    }
}

processInput(3)
