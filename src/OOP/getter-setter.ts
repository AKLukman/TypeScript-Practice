class BankAccount1 {
  readonly id: number;
  name: string;
  private _balance: number;
  constructor(id: number, name: string, _balance: number) {
    this.id = id;
    this.name = name;
    this._balance = _balance;
  }

  //   getter
  get balanace(): number {
    return this._balance;
  }

  //   getBalance() {
  //     return this._balance;
  //   }

  // setter
  set deposit(amount: number) {
    this._balance = this._balance + amount;
  }

  //   addDeposit(amount: number) {
  //     this._balance = this._balance + amount;
  //   }
}

class StudentAccount extends BankAccount1 {
  test() {}
}

const myAccount1 = new BankAccount1(1, "ABC", 20000);
console.log(myAccount1);
myAccount1.deposit = 55000;
console.log(myAccount1.balanace);
