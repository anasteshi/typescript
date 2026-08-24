let car: { brand: string; year: number } = { brand: "toyota", year: 2020 }

car.brand = "ford" // valid

let car1: { brand: string; year: number } = { brand: "audi", year: 2022 }

let book = { title: "book", cost: 20 }
let pen = { title: "pen", cost: 5 }
let notebook = { title: "notebook" }

let items: { title: string; readonly cost?: number }[] = [
    book,
    pen,
    notebook,
] // ?: optional property

// items[0].cost = 0 // invalid since cost is readonly
items[0].title = "free book"
