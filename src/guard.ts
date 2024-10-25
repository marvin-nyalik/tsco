interface Dog {
  breed: string;
  bark(): void;
}

interface Cat {
  breed: string;
  meow(): void;
}

function isDog(animal: any): animal is Dog {
  return (animal as Dog).bark != undefined;
}

function makeSound(animal: Dog | Cat) {
  if (isDog(animal)) {
    animal.bark();
  } else {
    animal.meow();
  }
}

const dog: Dog = {
  breed: "motina",
  bark: () => console.log(`Woof wof!!`),
};

const cat: Cat = {
  breed: "siamese",
  meow: () => console.log("Meoww!"),
};

makeSound(dog);
makeSound(cat);
