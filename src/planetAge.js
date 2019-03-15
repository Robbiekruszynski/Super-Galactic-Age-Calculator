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
      return (mercuryAlive);
    }

    aliveOnVenus(old) {
      const venusAlive = old / 0.62;
      return (venusAlive);
    }

    aliveOnMars(old) {
      const marsAlive = old / 1.88;
      return (marsAlive);
    }

    aliveOnJupiter(old) {
    const jupiterAlive = old / 11.86;
      return (jupiterAlive);

    }

    expectedEarth(old){
      let timeLeft = 90 - old;
      return timeleft;
    }

    expectedMercury(old){
      let timeLeft =  new Old(old);
      let onMercury = timeLeft.mercuryAlive(90) - timeLeft.mercuryAlive(old);
      return Math.round(expectedMercury);
    }

    expectedVenus(old){
      let timeLeft = new Old(old);
      let onVenus = timeLeft.venusAlive(90) - timeLeft.venusAlive(old);
      return Math.round(expectedVenus);
    }

    expectedMars(old){
      let timeLeft = new Old(old);
      let onMars = timeLeft.marsAlive(90) - timeLeft.marsAlive(old);
      return Math.round(expectedMars);
    }
    
    expectedJupiter(old){
    let timeLeft = new Old(old);
    let onJupiter = timeLeft.jupiterAlive(90) - timeLeft.jupiterAlive(old);
      return Math.round(expectedJupiter);
    }

}
