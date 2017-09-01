var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () =>
{
  it('should generate correct message object', () =>
  {
    var obj = generateMessage('the user', 'the text');

    expect(obj.from).toBe('the user');
    expect(obj.text).toBe('the text');
    expect(obj.createdAt).toBeA('number');
  });
});

describe('generateLocationMessage', () =>
{
  it('should generate correct location message object', () =>
  {
    var obj = generateLocationMessage('the user', 100.25, 200.5);

    expect(obj.from).toBe('the user');
    expect(obj.url).toBe('https://www.google.com/maps?q=100.25,200.5');
    expect(obj.createdAt).toBeA('number');
  });
});
