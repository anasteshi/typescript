// with union types it is possible to set up multiple valid values or types for a variable
let tax: number | string = 10
tax = "$10"
tax = 10

let requestStatus: "pending" | "success" | "error" = "pending"
let responseStatus: "success" | 1 | true = "success"

