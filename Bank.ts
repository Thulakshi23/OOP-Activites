class BankAccount {
    accountNumber: number;
    owner: string;
    balance: number;

    constructor(accountNumber: number, owner: string) {
        this.accountNumber = accountNumber;
        this.owner = owner;
        this.balance = 0.0;
    }

    deposit(amount: number): void {
        if (amount > 0) {
            this.balance += amount;
            console.log(`${amount} deposited. New balance: ${this.balance}`);
        } else {
            console.log("Deposit amount must be positive.");
        }
    }

    withdraw(amount: number): void {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log(`${amount} withdrawn. New balance: ${this.balance}`);
        } else if (amount > this.balance) {
            console.log("Insufficient funds.");
        } else {
            console.log("Withdrawal amount must be positive.");
        }
    }

    checkBalance(): number {
        return this.balance;
    }
}

class SavingsAccount extends BankAccount {
    interestRate: number;

    constructor(accountNumber: number, owner: string, interestRate: number) {
        super(accountNumber, owner);
        this.interestRate = interestRate;
    }

    applyInterest(): void {
        const interest = this.balance * (this.interestRate / 100);
        this.balance += interest;
        console.log(`Interest applied at rate ${this.interestRate}%. New balance: ${this.balance}`);
    }
}

// Test the banking system
function main() {
    // Create a regular bank account
    const account1 = new BankAccount(12345, "Alice");
    account1.deposit(500);
    account1.withdraw(200);
    console.log(`Alice's Balance: ${account1.checkBalance()}`);

    // Create a savings account
    const savingsAccount = new SavingsAccount(67890, "Bob", 5); // 5% interest rate
    savingsAccount.deposit(1000);
    savingsAccount.applyInterest();  // Apply interest
    savingsAccount.withdraw(300);
    console.log(`Bob's Savings Account Balance: ${savingsAccount.checkBalance()}`);
}

main();
