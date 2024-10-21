enum MembershipType {
  Silver = "Silver",
  Gold = "Gold",
  Platinum = "Platinum",
}

interface Person {
  name: string;
  age: number;
  getInfo(): string;
}

interface Employee extends Person {
  position: string;
  department: string;

  getDepartment(): string;
}

interface Customer extends Person {
  membershipType: MembershipType;
  loyaltyPoints: number;

  addLoyaltyPoints(points: number): void;
}

class EmployeeClass implements Employee {
  name: string;
  age: number;
  position: string;
  department: string;

  constructor(name: string, age: number, position: string, department: string) {
    this.name = name;
    this.age = age;
    this.position = position;
    this.department = department;
  }

  getInfo(): string {
    return `Employee: ${this.name}, Age: ${this.age}, Position: ${this.position}, Department: ${this.department}`;
  }

  getDepartment(): string {
    return this.department;
  }
}

class CustomerClass implements Customer {
  name: string;
  age: number;
  membershipType: MembershipType;
  loyaltyPoints: number;

  constructor(
    name: string,
    age: number,
    membershipType: MembershipType,
    loyaltyPoints: number = 0
  ) {
    this.name = name;
    this.age = age;
    this.membershipType = membershipType;
    this.loyaltyPoints = loyaltyPoints;
  }

  getInfo(): string {
    return `Customer: ${this.name}, Age: ${this.age}, Membership: ${this.membershipType}, Loyalty Points: ${this.loyaltyPoints}`;
  }

  addLoyaltyPoints(points: number): void {
    if (points < 0) {
      throw new Error("Loyalty points cannot be negative.");
    }
    this.loyaltyPoints += points;
  }
}

const employee = new EmployeeClass(
  "John Doe",
  30,
  "Software Engineer",
  "Development"
);
console.log(employee.getInfo());
console.log(`Department: ${employee.getDepartment()}`);

const customer = new CustomerClass("Jane Smith", 25, MembershipType.Gold);
console.log(customer.getInfo());

customer.addLoyaltyPoints(100);
console.log(customer.getInfo());

try {
  customer.addLoyaltyPoints(-50);
} catch (error) {
  console.error(error);
}
