function identify<T>(value: T): T {
  return value;
}

interface Greet {
  say: string;
  reply: string;
}

console.log(identify<number>(12));
console.log(identify<string>("Hello World"));
console.log(identify<Greet>({ say: "Hi", reply: "Hello" }));


function returnTuple<T, U>(a: T, b: U): [T, U] {
  return [a, b];
}

console.log(returnTuple<number, string>(12, "apples"));
console.log(
  returnTuple<Greet, string>({ say: "Sasa", reply: "Fit" }, "apples")
);

class Box<T> {
  constructor(public contents: T) {}
  setContents(content: T) {
    this.contents = content;
  }
  getContents(): T {
    return this.contents;
  }
}

const strContent = new Box<string>("Heeey");
console.log(strContent.getContents());
strContent.setContents("Neeey");
console.log(strContent.getContents());

const greetContent = new Box<Greet>({ say: "Whats", reply: "Up" });
console.log(greetContent.getContents());

function getPropertyOfGreet<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
const hw: Greet = { say: "Hi", reply: "Hello" };

console.log(getPropertyOfGreet(hw, "say"));
