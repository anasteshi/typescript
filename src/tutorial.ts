function sum(message: string, ...numbers: number[]): string {
    // ...name: type[] is rest function parameter syntax
    const doubled = numbers.map((num) => num * 2)
    console.log(doubled)

    const total = numbers.reduce((prev, curr) => {
        return prev + curr
    }, 0)

    return `${message} ${total}`
}

let result = sum("The total is:", 1, 2, 3, 4, 5)
console.log(result)
