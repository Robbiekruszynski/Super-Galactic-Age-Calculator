export class YourBirthday {

  constructor(birthday){
    this.birthday = birthday;
  }

  findAge() {
    let today = new Date();
    let birthday = newDate (this.birthday);
    let age = today.getFullYear() - birthday.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }
  // console.log('your age: ' + getAge("1989/04/27"));
}
