// write a function called create account which accepts a pin and amount 
// the return should be an object with 4 methods on it

function createAccount(AcctPin, balance = 0) {
 
    return {
        "checkBalance": function(pin){
            if(pin === AcctPin) return `$${balance}`; 
            else return "Invalid PIN.";
        }, 
        "deposit": function(pin, amt){
            if(pin === AcctPin) {
                let newBal = amt + balance; 
                balance = newBal;
                return `Succesfully deposited $${amt}. Current balance: $${balance}.`; 
            } 
            else return "Invalid PIN.";
        },
        "withdraw": function(pin, amt){
            if(pin === AcctPin && amt < balance) {
                let newBal = balance - amt; 
                balance = newBal;
                return `Succesfully withdrew $${amt}. Current balance: $${balance}.`; 
            } 
            else if(pin !== AcctPin)  return "Invalid PIN.";
            else return "Withdrawal amount exceeds account balance. Transaction cancelled.";
        },
        "changePin": function(pin, newPin){
            console.log("AcctPin:", AcctPin)
            console.log("pin:", pin)
            console.log("pin === AcctPin", pin === AcctPin)
            if(pin === AcctPin) {
                AcctPin = newPin; 
                return "PIN successfully changed!"
            } else {
                return "Invalid PIN.";
            }

        }
    }
}

createAccount()

let account = createAccount("1234", 0);
console.log("account:", account)

let result1 = account.checkBalance("oops");
// "Invalid PIN."

let result2 = account.deposit("1234", 200);
// "Succesfully deposited $250. Current balance: $350."

let result21 = account.deposit("1234", 100);

let result3 = account.withdraw("1234", 300);
// "Succesfully withdrew $300. Current balance: $50."

let result4 = account.withdraw("1234", 10);
// "Withdrawal amount exceeds account balance. Transaction cancelled."

let result5 = account.changePin("1234", "5678");
"PIN successfully changed!"

console.log("result1:", result1)
console.log("result2:", result2)
console.log("result21:", result21)
console.log("result3:", result3)
console.log("result4:", result4)
console.log("result5:", result5)

module.exports = { createAccount };
