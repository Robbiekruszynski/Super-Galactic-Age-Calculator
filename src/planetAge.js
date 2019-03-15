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

    // expectedEarth(old){
    //   let timeLeft = 90 - old;
    //   return timeleft;
    // }

    expectedMercury(old){
      let timeLeft =  new Old(old);
      let onMercury = timeLeft.aliveOnMercury(90) - timeLeft.aliveOnMercury(old);
      return Math.round(onMercury);
    }

    expectedVenus(old){
      let timeLeft = new Old(old);
      let onVenus = timeLeft.aliveOnVenus(90) - timeLeft.aliveOnVenus(old);
      return Math.round(onVenus);
    }

    expectedMars(old) {
      let timeLeft = new Old(old);
      let onMars = timeLeft.aliveOnMars(90) - timeLeft.aliveOnMars(old);
      return Math.round(onMars);
    }

    expectedJupiter(old){
    let timeLeft = new Old(old);
    let onJupiter = timeLeft.aliveOnJupiter(90) - timeLeft.aliveOnJupiter(old);
      return Math.round(onJupiter);
    }

}
