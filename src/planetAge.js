export class EarthTimer {

    constructor(earthtimer) {
      this.earthtimer = earthtimer;
    }

    inSeconds(earthtimer) {
      let earthtimeInSeconds = earthtimer * 31536000
      return earthtimeInSeconds;
    }

    aliveOnMercury(earthtimer) {
      let mercuryAlive = earthtimer / 0.24;
      return Math.round(mercuryAlive);
    }

    aliveOnVenus(earthtimer) {
      let venusAlive = earthtimer / 0.62;
      return Math.round(venusAlive);
    }

    aliveOnMars(earthtimer) {
      let marsAlive = earthtimer * 1.88;
      return Math.round(marsAlive);
    }

    aliveOnJupiter(earthtimer) {
      let jupiterAlive = earthtimer * 11.86;
      return Math.round(jupiterAlive);

    }
}
