export class Old {

    constructor(old) {
      this.old= old;
    }

    inSeconds(old) {
      let oldInSeconds = old * 31536000
      return oldInSeconds;
    }

    aliveOnMercury(old) {
      let mercuryAlive = old / 0.24;
      return Math.round(mercuryAlive);
    }

    aliveOnVenus(old) {
      let venusAlive = old / 0.62;
      return Math.round(venusAlive);
    }

    aliveOnMars(old) {
      let marsAlive = old / 1.88;
      return Math.round(marsAlive);
    }

    aliveOnJupiter(old) {
      let jupiterAlive = old / 11.86;
      return Math.round(jupiterAlive);

    }
}
