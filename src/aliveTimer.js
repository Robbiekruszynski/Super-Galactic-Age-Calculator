export class Birthtime {

  constructor(birthtime){
    this.birthtime = birthtime;
  }

  findAge() {
    let today = new Date();
    let birthday = new Date(this.birthtime);
    let age = today.getFullYear() - birthday.getFullYear();
    let m = today.getMonth() - birthday.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthday.getDate())) {
      age--;
    }
    return age;
  }
  // console.log('your age: ' + getAge("1989/04/27"));
}
