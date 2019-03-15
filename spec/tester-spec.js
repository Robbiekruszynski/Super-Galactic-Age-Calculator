import { getAge } from './../src/space.js';


describe('getAge', function(){

//   it('should return the correct age for selection of mars', function() {
//   expect(haikuPusher('Monday')).toEqual(' molasses. My flat stone, skipping along. Avoid still water.')
// });

  it('should return the correct age on Earth with input of year/month/day', function() {
  expect(getAge('1989/04/27')).toEqual('29');
});

});
