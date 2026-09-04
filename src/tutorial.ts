const names: string[] = ["anastasiia", "viktoriia", "diana", "irene"]

function isNameInList(name: string): boolean {
    return names.includes(name)
}

let nameToCheck = "anastasiia"
if (isNameInList(nameToCheck)) {
    console.log(`${nameToCheck} is on the list!`)
} else {
    console.log(`${nameToCheck} is not on the list...`)
}
