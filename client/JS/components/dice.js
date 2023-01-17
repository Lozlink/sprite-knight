function rollDice() {
   return 1 + Math.floor(Math.random() * 6)
}

console.log(rollDice())

module.exports = rollDice