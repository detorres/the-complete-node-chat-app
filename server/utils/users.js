class Users
{
  constructor ()
  {
    this.users = [];
  }

  addUser (id, name, room)
  {
    var user = {id, name, room};
    this.users.push(user);
    return user;
  }

  removeUser (id)
  {
    var user = this.users.filter((user) => user.id === id);
    this.users = this.users.filter((user) => user.id !== id);
    return user[0];
  }

  getUser (id)
  {
    var user = this.users.filter((user) => user.id === id);
    return user[0];
  }

  getUserList (room)
  {
    var roomUsers = this.users.filter((user) => user.room === room);
    var userNames = roomUsers.map((user) => user.name);

    return userNames;
  }
}

module.exports = {Users};
