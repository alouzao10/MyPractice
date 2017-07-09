// Private Methods

const budget = () => {
   let balance = 0
   let changeBal = (val) => {
      return balance += val
   }
   const deposit20 = () => {
      changeBal(20)
   }
   const checkBal = () => {
      return balance
   }
   const withdraw20 = () => {
      changeBal(-20)
   }
   return { // function returns to the object variable
      deposit20: deposit20,
      withdraw20: withdraw20,
      checkBal: checkBal
   }
}

let wallet = budget()
console.log(wallet)
wallet.deposit20()
wallet.deposit20()
wallet.deposit20()
wallet.withdraw20()
console.log(wallet.checkBal()) // methods that have access to the balance
// console.log(wallet.balance)
