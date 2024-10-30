interface Subject {
  registerObserver(o: Observer): void;
  removeObserver(o: Observer): void;
  notifyObservers(): void;
}

interface Observer {
  update(temp: number): void;
}

class WeatherStation implements Subject {
  public observers: Observer[] = [];
  public temperature!: number;

  setTemperature(temp: number) {
    this.temperature = temp;
    this.notifyObservers();
  }

  registerObserver(o: Observer): void {
    this.observers.push(o);
  }
  removeObserver(o: Observer): void {
    let idx = this.observers.indexOf(o);
    this.observers.splice(idx, 1);
  }
  notifyObservers(): void {
    for (let observer of this.observers) {
      observer.update(this.temperature);
    }
  }
}

class TemperatureDisplay implements Observer {
  private subject!: Subject;
  constructor(weatherStation: Subject) {
    this.subject = weatherStation;
    weatherStation.registerObserver(this);
  }
  update(temp: number): void {
    console.log(`the new temperature is ${temp}`);
  }
}

class Fan implements Observer {
  private subject!: Subject;
  constructor(weatherStation: Subject) {
    this.subject = weatherStation;
    weatherStation.registerObserver(this);
  }
  update(temp: number): void {
    if (temp > 20) {
      console.log(`Too hot, turning on`);
    } else {
      console.log(`Getting cool, turning off`);
    }
  }
}

const weatherStation = new WeatherStation();

const dis = new TemperatureDisplay(weatherStation);
const fan = new Fan(weatherStation);

weatherStation.setTemperature(21);
weatherStation.setTemperature(19);
weatherStation.removeObserver(fan);

weatherStation.setTemperature(23);
