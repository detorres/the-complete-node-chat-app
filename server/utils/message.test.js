var expect = require('expect');

var {generateMessage} = require('./message');

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
