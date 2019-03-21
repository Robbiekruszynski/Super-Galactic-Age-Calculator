import { AgeCalc } from "./../src/aliveTimer.js";
import { Old } from "./../src/planetAge.js";

describe('AgeCalc', function(){
  let birthday = "1989, April, 27";
  let yourBirthday = new AgeCalc(birthday);
  let yourAge = Math.round(yourBirthday.findAge());
  let homeAge = new Old(yourAge);

  let mercuryAge = Math.round(homeAge.aliveOnMercury(yourAge));
  let venusAge = Math.round(homeAge.aliveOnVenus(yourAge));
  let marsAge = Math.round(homeAge.aliveOnMars(yourAge));
  let jupiterAge = Math.round(homeAge.aliveOnJupiter(yourAge));

  let expectedMercury = homeAge.expectedMercury(yourAge);
  let expectedVenus = homeAge.expectedVenus(yourAge);
  let expectedMars = homeAge.expectedMars(yourAge);
  let expectedJupiter = homeAge.expectedJupiter(yourAge);
  let expectedHome = homeAge.expectedHome(yourAge);

                                    ////  expected age tests
  it('should return the correct age for the user on earth after they enter their birthday', function() {
    expect(yourBirthday.findAge()).toEqual(29);
  });

  it('should return the correct age for the user on mars after they enter their birthday', function() {
    expect(marsAge).toEqual(15);

  });

  it('should return the correct age for the user on mercury after they enter their birthday', function() {
    expect(mercuryAge).toEqual(121);

});

it('should return the correct age for the user on venus after they enter their birthday', function() {
  expect(venusAge).toEqual(47);

});

it('should return the correct age for the user on jupiter after they enter their birthday', function() {
  expect(jupiterAge).toEqual(2);

});

it('should return the correct age for the user on jupiter after they enter their birthday', function() {
  expect(jupiterAge).toEqual(2);

  });
                                    ////  expected life tests

  it('should return life expected for the user on mars after they enter their birthday', function() {
    expect(expectedMercury).toEqual(254);

  });

  it('should return life expected for the user on mars after they enter their birthday', function() {
    expect(expectedVenus).toEqual(98);

  });

  it('should return life expected for the user on mars after they enter their birthday', function() {
    expect(expectedMars).toEqual(32);

  });

  it('should return life expected for the user on mars after they enter their birthday', function() {
    expect(expectedJupiter).toEqual(5);

  });

  it('should return life expected for the user on mars after they enter their birthday', function() {
    expect(expectedHome).toEqual(90);

  });
});
