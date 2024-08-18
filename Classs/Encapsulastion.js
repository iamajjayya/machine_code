
class BankAccount {
  #balance  

  constructor(accountholdr ,  balance) {
    this.accountholdr = accountholdr ;
    this.#balance = balance ;


  }

  deposit(amount) {
    if(amount > 0) {
        this.#balance += amount;
    } else {
        console.log(" This is Invalid Transaction")
    }
  }

  withdraw (amount) {
    if ( amount > 0 &&  amount <= this.#balance) {
        this.#balance -= amount;
    } else {
        console.log (" Invalid Transcation ")
    }
  }
   
  getBalnce () {
      return this.#balance
  }



}


const myAccount = new BankAccount("Ajay" , 5000)
console.log(myAccount.accountholdr)
console.log(myAccount.getBalnce())
myAccount.deposit(5000)
console.log(myAccount.getBalnce())
myAccount.withdraw(7000)
console.log(myAccount.getBalnce())
myAccount.withdraw(3000)
console.log(myAccount.getBalnce())
myAccount.withdraw(3000)


