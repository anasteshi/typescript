function calculatePrice(price: number, discount?: number): number {
    // ?: is optional function parameter
    return price - (discount || 0) // if discount is true – discount, if false – 0
}

let priceAfterDiscount = calculatePrice(100, 20)
