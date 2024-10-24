interface Order {
  name: string;
  price: number;
  _desc: string;
  getOrderId(): number;
}

class OrderClass implements Order {
  public get price(): number {
    return this._price;
  }
  public set price(value: number) {
    this._price = value;
  }

  constructor(
    public name: string,
    private desc: string,
    private _price: number,
    private readonly _orderId: number
  ) {}

  public get _desc(): string {
    return this.desc;
  }

  public set _desc(newDesc: string) {
    if (newDesc.length > 0) {
      this.desc = newDesc;
    } else {
      throw new Error("Description cannot be empty!");
    }
  }

  public getOrderId(): number {
    return this._orderId;
  }
}

class SpecialOrder extends OrderClass implements Order {
  constructor(
    name: string,
    desc: string,
    price: number,
    orderId: number,
    private _discount: number
  ) {
    super(name, desc, price, orderId);
  }

  public set discount(dis: number) {
    if (isNaN(dis) || dis < 0 || dis > super.price) {
      throw new Error(
        `Discount must be a number greater than 0 and less than price, The price is ${
          super.price
        }`
      );
    } else {
      this._discount = dis;
    }
  }

  public get discount(): number {
    return this._discount;
  }

  public get price(): number {
    return super.price - this._discount;
  }
  public set price(value: number) {
    super.price = value;
  }
}

class OrderFactory {
  static createOrder(
    type: string,
    name: string,
    desc: string,
    price: number,
    orderId: number,
    discount: number
  ): OrderClass | SpecialOrder {
    if (type === "special") {
      return new SpecialOrder(name, desc, price, orderId, discount);
    } else {
      return new OrderClass(name, desc, price, orderId);
    }
  }
}

let order = OrderFactory.createOrder(
  "normal",
  "Bhajia",
  "Happy meal",
  1.99,
  1234,
  0
);

let orderS = OrderFactory.createOrder(
  "special",
  "Bhajia Special",
  "New Happy meal",
  1.99,
  783479,
  0.5
);

console.log(orderS.getOrderId());
console.log(orderS._desc);
console.log(orderS.price);
orderS.price = 5.0;

if (orderS instanceof SpecialOrder) {
  orderS.discount = 2;
}
console.log(orderS.price);
