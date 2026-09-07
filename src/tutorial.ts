function logMessage(message: string): void {
    console.log(message)
    // return "success" // is not valid in case of explicitly set 'void' return value
}

const result = logMessage("Hi, Kris!")
console.log(`The type is: ${result}`)
