/// handle all the controller in ts file to handle an object; handle all the request about one model,
// can use as the UserService object in controller;
import { Injectable } from '@angular/core';
import { User } from '../models/user.model.client';

@Injectable()
export class UserService {

  constructor() { }

  users: User[] = [
    { _id: '123', username: 'alice', password: 'alice', firstName: 'Alice', lastName: 'Wonder', emailAddress: '' },
    { _id: '234', username: 'bob', password: 'bob', firstName: 'Bob', lastName: 'Marley', emailAddress: '' },
    { _id: '345', username: 'charly', password: 'charly', firstName: 'Charly', lastName: 'Garcia', emailAddress: '' },
    { _id: '456', username: 'jannunzi', password: 'jannunzi', firstName: 'Jose', lastName: 'Annunzi', emailAddress: '' }
  ];

  createUser(user: User) {
    user._id = Math.random().toString();
    this.users.push(new User(user._id, user.username, user.password, user.firstName, user.lastName, user.emailAddress));
    console.log(this.users);
  }

  findUserById(userId: String) {
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i]._id === userId) {
        return this.users[i];
      }
    }
  }

  findUserByUsername(username: String) {
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].username === username) {
        return this.users[i];
      }
    }
  }

  findUserByCredential(username: String, password: String) {
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].username === username && this.users[i].password === password) {
        return this.users[i];
      }
    }
  }

  updateUser(user: User) {
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i]._id === user._id) {
        this.users[i].firstName = user.firstName;
        this.users[i].lastName = user.lastName;
        this.users[i].emailAddress = user.emailAddress;
        return this.users[i];
      }
    }
  }

  deleteUser(userId: String) {
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i]._id === userId) {
        this.users.splice(i, 1);
      }
    }
  }
}

