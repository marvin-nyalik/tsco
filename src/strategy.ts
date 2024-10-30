interface PaymentStrategy {
  pay(amount: number): void;
}

class CreditPayment implements PaymentStrategy {
  constructor(private card_number: string, private card_holder: string) {}

  pay(amount: number): void {
    console.log(`Paid $${amount} using credit card`);
  }
}

class Paypal implements PaymentStrategy {
  constructor(private email: string) {}

  pay(amount: number): void {
    console.log(`Paid $${amount} using paypal`);
  }
}

class PaymentContext {
  constructor(private strategy: PaymentStrategy) {}

  setStrategy(strategy: PaymentStrategy): void {
    this.strategy = strategy;
  }

  checkout(amount: number): void {
    this.strategy.pay(amount);
  }
}

let paypalPay = new Paypal('otis@marv.net');
let creditPay = new CreditPayment('126SJNWU453', 'Marvin Otis');
let context = new PaymentContext(paypalPay);

context.checkout(50);

context.setStrategy(creditPay);

context.checkout(300);