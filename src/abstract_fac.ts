interface Chair {
  hasLegs(): boolean;
  sitOn(): void;
}

interface Sofa {
  hasCushions(): boolean;
  lieOn(): void;
}

class VictorianChair implements Chair {
  hasLegs(): boolean {
    return true;
  }
  sitOn(): void {
    console.log(`Sitting on Victorian chair`);
  }
}

class ModernChair implements Chair {
  hasLegs(): boolean {
    return false;
  }
  sitOn(): void {
    console.log(`Sitting on a Modern chair`);
  }
}

class VictorianSofa implements Sofa {
  hasCushions(): boolean {
    return true;
  }
  lieOn(): void {
    console.log(`Lying on Victorian Sofa`);
  }
}

class ModernSofa implements Sofa {
  hasCushions(): boolean {
    return false;
  }
  lieOn(): void {
    console.log(`Lying on a Modern Sofa`);
  }
}

interface FurnitureFactory {
  createChair(): Chair;
  createSofa(): Sofa;
}

class VictorianFurnitureFactory implements FurnitureFactory {
  createChair(): Chair {
    return new VictorianChair();
  }
  createSofa(): Sofa {
    return new VictorianSofa();
  }
}

class ModernFurnitureFactory implements FurnitureFactory {
  createChair(): Chair {
    return new ModernChair();
  }
  createSofa(): Sofa {
    return new ModernSofa();
  }
}

function createFurnitureSet(factory: FurnitureFactory) {
  const chair = factory.createChair();
  const sofa = factory.createSofa();

  chair.sitOn();
  sofa.lieOn();
}

let modern = new ModernFurnitureFactory();
let victorian = new VictorianFurnitureFactory();

createFurnitureSet(modern);
createFurnitureSet(victorian);
