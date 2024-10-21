let age: number = 23;
let name: string = "Marvin";
let isGenZ: boolean = true;
let anything: any = "well"; //disables type check
let unknown: unknown = 10; //requires type check before use;

let sym: symbol = Symbol("unique");
let sym2: symbol = Symbol("unique");

function logMessage(): void {
  console.log("This returns nothing.");
}

function throwError(): never {
  throw new Error("This always throws");
}

//literal types
let direction: "up" | "down"; // Can only be 'up' or 'down'
direction = "up"; // valid

//optional and default
function greet(name: string, greeting?: string): string {
  return `${greeting || "Hello"}, ${name}`;
}
// union type
let id: number | string;

let numbers: Array<number> = [1, 2, 3];
let strings: Array<string> = ["hello", "world"];

enum Color {
  Red,
  Green,
  Blue,
}

let color: Color = Color.Red;
console.log(color);
