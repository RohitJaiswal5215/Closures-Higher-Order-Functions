function createBankAccount(initialBalance) {
    let balance = initialBalance

    return {
        deposit: function(amount) {
            if (amount > 0) {
                balance += amount
                console.log(`Deposited: $${amount}. New balance: $${balance}`)
            } else {
                console.log("Deposit amount must be positive.")
            }
        },

        withdraw: function(amount) {
            if (amount > 0 && amount <= balance) {
                balance -= amount;
                console.log(`Withdrawn: $${amount}. Remaining balance: $${balance}`)
            } else if (amount > balance) {
                console.log("Insufficient funds.")
            } else {
                console.log("Withdrawal amount must be positive.")
            }
        },

        getBalance: function() {
            return balance
        }
    }
}

const myAccount = createBankAccount(1000)

myAccount.deposit(500)
myAccount.withdraw(300)
console.log(myAccount.getBalance())

console.log(myAccount.balance)