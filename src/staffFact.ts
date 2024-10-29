interface IProps {
  type: string;
  name: string;
}

class Teacher {
  properties: IProps;

  constructor(props: IProps) {
    this.properties = props;
  }
}

class Assistant {
  properties: IProps;

  constructor(props: IProps) {
    this.properties = props;
  }
}

class StaffFactory {
  static create(data: IProps) {
    switch (data.type) {
      case "Teacher":
        return new Teacher(data);
      case "Assistant":
        return new Assistant(data);
      default:
        throw new Error(`type required`);
    }
  }
}

const t = StaffFactory.create({ type: "Teacher", name: "Olith" });
const a = StaffFactory.create({ type: "Assistant", name: "Ogada" });

console.log(t);
console.log(a);
