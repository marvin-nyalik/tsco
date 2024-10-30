class Amplifier {
  on(): void {
    console.log("Amplifier is on.");
  }

  off(): void {
    console.log("Amplifier is off.");
  }

  setVolume(volume: number): void {
    console.log(`Setting volume to ${volume}.`);
  }
}

class DvdPlayer {
  on(): void {
    console.log("DVD player is on.");
  }

  off(): void {
    console.log("DVD player is off.");
  }

  play(movie: string): void {
    console.log(`Playing movie: ${movie}`);
  }

  stop(): void {
    console.log("Stopping DVD.");
  }
}

class Projector {
  on(): void {
    console.log("Projector is on.");
  }

  off(): void {
    console.log("Projector is off.");
  }

  wideScreenMode(): void {
    console.log("Projector in widescreen mode (16x9 aspect ratio).");
  }
}

class Screen {
  down(): void {
    console.log("Theater screen is down.");
  }

  up(): void {
    console.log("Theater screen is up.");
  }
}

class HomeTheaterFacade {
  private amplifier: Amplifier;
  private dvdPlayer: DvdPlayer;
  private projector: Projector;
  private screen: Screen;

  constructor(
    amplifier: Amplifier,
    dvdPlayer: DvdPlayer,
    projector: Projector,
    screen: Screen
  ) {
    this.amplifier = amplifier;
    this.dvdPlayer = dvdPlayer;
    this.projector = projector;
    this.screen = screen;
  }

  public watchMovie(movie: string): void {
    console.log("Get ready to watch a movie...");
    this.screen.down();
    this.projector.on();
    this.projector.wideScreenMode();
    this.amplifier.on();
    this.amplifier.setVolume(10);
    this.dvdPlayer.on();
    this.dvdPlayer.play(movie);
  }

  public endMovie(): void {
    console.log("Shutting down the home theater...");
    this.dvdPlayer.stop();
    this.dvdPlayer.off();
    this.amplifier.off();
    this.projector.off();
    this.screen.up();
  }
}

const amplifier = new Amplifier();
const dvdPlayer = new DvdPlayer();
const projector = new Projector();
const screen = new Screen();

const homeTheater = new HomeTheaterFacade(
  amplifier,
  dvdPlayer,
  projector,
  screen
);

homeTheater.watchMovie("Inception");

homeTheater.endMovie();
