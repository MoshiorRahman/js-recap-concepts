/* const bank = owner => {
    let balance = 0;
    return amount => {
        // balance = balance + amount;
        balance += amount;
        return balance;
    }
}

const MofijBank.deposit = bank('Mofij');
console.log(MofijBank.deposit(100));
console.log(MofijBank.deposit(200));
console.log(MofijBank.deposit(700));
console.log(MofijBank.deposit.balance);
console.log(MofijBank.deposit(50));

 */

const bank = owner => {
    balance = 0;
    return {
        deposite: amount => {
            balance += amount;
            return balance;
        },
        withdraw: amount => {
            balance -= amount;
            return balance;
        }
    }
}

const MofijBank = bank('Mofij');
console.log(MofijBank.deposite(100));
console.log(MofijBank.deposite(200));
console.log(MofijBank.deposite(700));
console.log(MofijBank.balance);
console.log(MofijBank.deposite(50));

console.log(MofijBank.withdraw(50));
console.log(MofijBank.withdraw(100));