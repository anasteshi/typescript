interface Computer {
    readonly id: number
    brand: string
    ram: number
    storage?: number
    upgradeRam(increase: number): number
}

const laptop: Computer = {
    id: 1,
    brand: "Apple",
    ram: 8,
    storage: 256,
    upgradeRam(ram) {
        this.ram += ram
        return this.ram
    },
}

laptop.storage = 256
console.log(laptop)
console.log(laptop.upgradeRam(8))
