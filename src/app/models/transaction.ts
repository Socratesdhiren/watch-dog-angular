/**
 * Created by rajhim on 1/9/18.
 */
export class TransactionLog{
 data: Transaction[];
}
export class Transaction{
  sourceCustomer: string;
  tranAmount: number;
  tranDate: DateTime;
  status: string;
  constructor() {
    this.tranDate = new DateTime();
}

}
export class DateTime{
  date: Date;
  time: Time;
  constructor(){
    this.date = new Date();
    this.time = new Time();
  }
}
export class Date{
  year: number;
  month: number;
  day: number;
}
export class Time{
  hour: number;
  minute: number;
  second: number;
}


export class Payment {
  invoiceNumber: string;
  originator: string;
  merchantCode: string;
  amount: number;
}

export class PaymentResponse{
  token: string;
  fee: number;
  cashBack: number;
}
