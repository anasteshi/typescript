let prices: number[] = [100, 50, 45]
// prices: number[] = [100, true, "45"] // not valid
// prices.push("discount") // not valid

let fruits: string[] = ["apple", "orange"]

// let values: [] = [",", 2, "."] // means that the array must always be empty. that's why this is not valid
let things: any[] = ["", 0, false] // an array of values of any type

// let array1: string[] | boolean[] = []
let array2: (string | boolean)[] = ["apple", true, "orange", false] // same as previous line
