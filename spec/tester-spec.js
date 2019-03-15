import { Old } from './../src/aliveTimer.js';


describe('old', function(){

//   it('should return the correct age for selection of mars', function() {
//   expect(haikuPusher('Monday')).toEqual(' molasses. My flat stone, skipping along. Avoid still water.')
// });

  it('should return the correct age on Earth with input of year/month/day', function() {
    let birthday = new Old(19800503);
    expect(old.findAge()).toEqual(47);
});

});
