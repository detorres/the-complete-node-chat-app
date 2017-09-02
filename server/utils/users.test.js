const expect = require('expect');

var {Users} = require('./users');

describe('Users', () =>
{
  var users;

  beforeEach(() =>
  {
    users = new Users();
    users.users = [
      {
        id: '1',
        name: 'Mike',
        room: 'Node Course'
      },
      {
        id: '2',
        name: 'Jen',
        room: 'React Course'
      },
      {
        id: '3',
        name: 'Julie',
        room: 'Node Course'
      }
    ];
  });

  it('should add new user', () =>
  {
    var users = new Users();
    var user = {
      id: '123',
      name: 'Andy',
      room: '101'
    };

    var newUser = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  });

  it('should remove a valid user', () =>
  {
    var user = users.users[1];
    var removedUser = users.removeUser(user.id);

    expect(removedUser).toBe(user);
    expect(users.users.length).toEqual(2);
  });

  it('should not remove an invalid user', () =>
  {
    var removedUser = users.removeUser('10');

    expect(removedUser).toNotExist();
    expect(users.users.length).toEqual(3);
  });

  it('should find a valid user', () =>
  {
    var user = users.users[1];
    var foundUser = users.getUser(user.id);

    expect(foundUser).toBe(user);
    expect(users.users.length).toEqual(3);
  });

  it('should not find an invalid user', () =>
  {
    var foundUser = users.getUser('10');
    
    expect(foundUser).toNotExist();
  });

  it('should return user names for Node Course', () =>
  {
    var userNames = users.getUserList('Node Course');

    expect(userNames).toEqual(['Mike', 'Julie']);
  });

  it('should return user names for Reace Course', () =>
  {
    var userNames = users.getUserList('React Course');

    expect(userNames).toEqual(['Jen']);
  });
});
