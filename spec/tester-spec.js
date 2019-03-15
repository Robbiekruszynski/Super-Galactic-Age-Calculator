import { Old } from './../src/aliveTimer.js';
import { AgeCalc  } from './../src/planetAge.js';


describe('AgeCalc', function(){

  it('should return the correct age for the user on Mercury after they complete the form', function() {
  const age = new AgeCalc(29);
  expect(age.aliveOnMercury(29)).toEqual(121);
});

  it('should return the correct age for the user on Mercury after they complete the form', function() {
  expect()
  });


});
