abstract class Car {
  public desc!: string;

  public getDesc(): string {
    return this.desc;
  }

  public abstract cost(): number;
}

class ModelX extends Car {
  public desc: string = "Model X Tesla";

  public cost(): number {
    return 50000;
  }
}

class ModelS extends Car {
  public desc: string = "Model S Tesla";

  public cost(): number {
    return 80000;
  }
}

abstract class CarOptions extends Car {
  decoratedCar!: Car;
  public abstract getDesc(): string;
  public abstract cost(): number;
}

class EnhancedAutoPilot extends CarOptions {
  decoratedCar;
  constructor(car: Car) {
    super();
    this.decoratedCar = car;
  }
  public getDesc(): string {
    return this.decoratedCar.getDesc() + ` With enhanced autopilot`;
  }
  public cost(): number {
    return this.decoratedCar.cost() + 5000;
  }
}

class RearFacingSeats extends CarOptions {
  decoratedCar;
  constructor(car: Car) {
    super();
    this.decoratedCar = car;
  }
  public getDesc(): string {
    return this.decoratedCar.getDesc() + ` With rear facing seats`;
  }
  public cost(): number {
    return this.decoratedCar.cost() + 4000;
  }
}

const myCar = new RearFacingSeats(new EnhancedAutoPilot(new ModelS()));
const myCar2 = new RearFacingSeats(new EnhancedAutoPilot(new ModelX()));

console.log(myCar.getDesc());
console.log(myCar.cost());
console.log(myCar2.cost());
