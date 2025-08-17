type tipTanımlama = string | number;

function Add(varible_A: tipTanımlama, varible_B: tipTanımlama) {

    if (typeof varible_A === "string" && typeof varible_B === "string") {
        return `${varible_A} ${varible_B}`
    }
    if (typeof varible_A === "number" && typeof varible_B === "number") {
        return varible_A + varible_B
    }

    throw new Error("Lütfen doğru formatta data gönderin.")
}

console.log(Add("Ozan", "Yaprak"))
console.log(Add(2, 3))
console.log(Add(2, "Ozan"))