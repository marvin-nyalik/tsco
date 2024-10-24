# Ambients

Ambients in TypeScript are **type declarations** made using the `declare` keyword. They are used to describe types for functions, classes, variables, or modules that are defined outside your current project scope, such as in external JavaScript files or third-party libraries.

1. TypeScript doesn't check whether these types actually exist; it just trusts that they will be present at runtime.
2. The declare keyword is used to define these ambient declarations.
3. Ambient declarations don't generate any JavaScript code; they exist purely for type safety within TypeScript.

# Structural Typing
Structural typing is a type system where compatibility between types is determined by their structure (i.e., the properties and methods they have), rather than their explicit names or declarations.

- In TypeScript, structural typing (also known as duck typing) means that the compatibility of types is based on their shape (or structure), rather than explicitly declared types or inheritance. Two types are considered compatible if they have the same shape, regardless of whether they were declared as the same type.

- In simpler terms, if an object has all the required properties and methods of a certain type, TypeScript considers it a valid instance of that type, regardless of its explicit type declaration.

```javascript
interface Person {
  name: string;
  age: number;
}

let john = { name: "John", age: 25, city: "New York" };

function greet(person: Person) {
  console.log(`Hello, ${person.name}`);
}

greet(john); // This works cause john implements the shape of Person interface!
```

# Factory Design Pattern
Key Components
1. Product: An interface or abstract class that defines the type of objects the factory creates.
2. Concrete Products: Classes that implement the Product interface.
3. Factory Interface: An interface for creating the Product objects.
4. Concrete Factory: Classes that implement the factory interface and return instances of Concrete Products.

Example Structure
Using your previous example, here's a breakdown of the components:

1. Product Interface: Order
2. Concrete Products: OrderClass, SpecialOrder
3. Factory Method: createOrder function
