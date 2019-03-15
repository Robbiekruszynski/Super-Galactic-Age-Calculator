export class AliveTimer {

    constructor(alivetimer) {
      this.alivetimer = alivetimer;
    }
    
    inSeconds(alivetimer) {
      let alivetimeInSeconds = alivetimer * 31536000
      return alivetimeInSeconds;
    }

    aliveOnMercury(alivetimer) {
      let mercuryAlive = alivetimer / 0.24;
      return Math.round(mercuryAlive);
    }

    aliveOnVenus(alivetimer) {
      let venusAlive = alivetimer / 0.62;
      return Math.round(venusAlive);
    }

    aliveOnMars(alivetimer) {
      let marsAlive = alivetimer / 1.88;
      return Math.round(marsAlive);
    }

    aliveOnJupiter(alivetimer) {
      let jupiterAlive = alivetimer / 11.86;
      return Math.round(alivetime);

    }
}
