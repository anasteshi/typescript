function calculatePrice(price: number, discount?: number): number {
    // ?: is optional function parameter
    return price - (discount || 0) // if discount is true – discount, if false – 0
}

let priceAfterDiscount = calculatePrice(100, 20)

function calculateScore(
    initialScore: number,
    penaltyPoints: number = 0,
): number {
    // = 0 is default function parameter syntax

    return initialScore - penaltyPoints
}

let scoreAfterPenalty = calculateScore(100 - 20)
let scoreWithoutPenalty = calculateScore(300)
