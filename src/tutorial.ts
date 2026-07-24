// Practical example – type inference
const books = ["1984", "Brave New World", "Last wish"]
let foundBook: string | undefined

for (let book of books) {
    if (book === "1984") {
        foundBook = book
        foundBook = foundBook.toUpperCase()
        break
    }
}
console.log(foundBook?.length)

// Practical example – union type
let orderStatus: "processing" | "shipped" | "delivered"
orderStatus = "processing"
orderStatus = "delivered"
// orderStatus = "cancelled" // is not valid

let discount: number | string
discount = 20
discount = "$20"
// discount = true // is not valid
