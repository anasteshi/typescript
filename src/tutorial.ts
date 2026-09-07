function processData(
    input: string | number,
    config: { reverse: boolean } = { reverse: false },
): string | number {
    if (typeof input === "number") {
        return input ** 2
    } else {
        return config.reverse ?
                input.toUpperCase().split("").reverse().join("")
            :   input.toUpperCase()
    }
}

console.log(processData(10))
console.log(processData("Hello!"))
console.log(processData("Hello!", { reverse: true }))
