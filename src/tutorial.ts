function calculatePriceWithDiscount(price: number): number {
    // second column is for return type
    const hasDiscount = true
    if (!hasDiscount) {
        // return "Discount Applied" // invalid
        return price
    }

    return price * 0.9
}

const finalPrice = calculatePriceWithDiscount(200)
console.log(finalPrice)
