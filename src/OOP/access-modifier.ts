class BankAccount {
  readonly id: number;
  name: string;
  private _balance: number;
  constructor(id: number, name: string, _balance: number) {
    this.id = id;
    this.name = name;
    this._balance = _balance;
  }
}

const myAccount = new BankAccount(1, "ABC", 20000);
console.log(myAccount);
