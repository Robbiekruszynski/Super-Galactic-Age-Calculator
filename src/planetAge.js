export class Old {

    constructor(old) {
      this.old= old;
    }

    inSeconds(old) {
      const oldInSeconds = old * 31536000
      return oldInSeconds;
    }

    aliveOnMercury(old) {
      const mercuryAlive = old / 0.24;
      return Math.round(mercuryAlive);
    }

    aliveOnVenus(old) {
      const venusAlive = old / 0.62;
      return Math.round(venusAlive);
    }

    aliveOnMars(old) {
      const marsAlive = old / 1.88;
      return Math.round(marsAlive);
    }

    aliveOnJupiter(old) {
    const jupiterAlive = old / 11.86;
      return Math.round(jupiterAlive);

    }
}
