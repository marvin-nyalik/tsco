function add(s: string | number, t: string | number): string | number {
  if (typeof s === "string" && typeof t === "string") {
    return `${s} ${t}`;
  } else if (typeof s === "number" && typeof t === "number") {
    return s + t;
  } else {
    throw new Error(`${s} and ${t} must have the same type`);
  }
}

console.log(add('Hello', 'World'));
console.log(add(5,4));

let value: unknown;
value = 42;

let num: number;

if(typeof value === 'number'){
  num = value;
  console.log(num)
}

enum Status {
  Processing = 'Processing',
  Shipped = 'Shipped',
  Delivered = "Delivered"
}

let orderStatud: Status = Status.Processing;
console.log(orderStatud);

interface Order {
  name: string;
  desc: string;
  status: Status;
  price: number;
  getInfo(): string;
}

class OrderClass implements Order {
  name: string;
  desc: string;
  status: Status;
  price: number;
  
  constructor(name: string, desc: string, status: Status, price: number){
    this.name = name;
    this.desc = desc;
    this.status = status;
    this.price = price;
  }
  
  getInfo(): string {
    console.log(`${this.name} -> ${this.desc} at ${this.price} is ${this.status}`);
    return `${this.name} -> ${this.desc} at ${this.price} is ${this.status}`;
  }
}
const myOrder = new OrderClass('Burger','Happy meal',Status.Delivered, 1.99);
myOrder.getInfo();

const ord: Order = {
  name: '',
  desc: '',
  status: Status.Shipped,
  price: 2.99,
  getInfo() {
      console.log('A string...')
      return `Done`
  },
}
console.log(ord)