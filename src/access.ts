class OrderClass {
  #desc: string;

  constructor(public name: string, desc: string, public price: number) {
    this.#desc = desc;
  }

  public get desc(): string {
    return this.#desc;
  }

  public set desc(newDesc: string) {
    if (newDesc.length > 0) {
      this.#desc = newDesc;
    } else {
      throw new Error("Description cannot be empty!");
    }
  }
}

const myOrder = new OrderClass("Burger", "Happy meal", 1.99);

console.log(myOrder.desc);

myOrder.desc = "Deluxe meal";
console.log(myOrder.desc);
