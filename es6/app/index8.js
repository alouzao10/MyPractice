// Strings and helper functions

let a = "W" + " ".repeat(10) + "oo".repeat(5)
console.log(a )

let b = `woo${"oo".repeat(5)}`
console.log(b)

console.log("butterfly".endsWith("fly"))
console.log("butterfly".startsWith("fly"))
console.log("butterfly".includes("fly"))


// Numbers and helper functions
const addToCart = (item, num) => {
   //return Number.isFinite(num)
   return Number.isSafeInteger(num)
}

// number validation
console.log(addToCart('shirt', Math.pow(2, 54)))
