/// handle all the controller in ts file to handle an object; handle all the request about one model,
// can use as the UserService object in controller;
import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { User } from '../models/user.model.client';
import { SharedService } from './shared.service';

@Injectable()
export class UserService {

  constructor(private http: Http, private sharedService: SharedService, private router: Router) { }

  baseUrl = environment.baseUrl;
  options = new RequestOptions();
  // users: User[] = [
  //   { _id: '123', username: 'alice', password: 'alice', firstName: 'Alice', lastName: 'Wonder', emailAddress: '' },
  //   { _id: '234', username: 'bob', password: 'bob', firstName: 'Bob', lastName: 'Marley', emailAddress: '' },
  //   { _id: '345', username: 'charly', password: 'charly', firstName: 'Charly', lastName: 'Garcia', emailAddress: '' },
  //   { _id: '456', username: 'jannunzi', password: 'jannunzi', firstName: 'Jose', lastName: 'Annunzi', emailAddress: '' }
  // ];

  createUser(user: User) {
    // user._id = Math.random().toString();
    // this.users.push(new User(user._id, user.username, user.password, user.firstName, user.lastName, user.emailAddress));
    // console.log(this.users);
    const url = this.baseUrl + '/api/user';
    return this.http.post(url, user).map(
      (res: Response) => {
        return res.json();
      }
    );
  }

  register(username: String, password: String) {
    this.options.withCredentials = true;
    const credentials = {
      username : username,
      password : password
    };
    return this.http.post(this.baseUrl + '/api/register', credentials, this.options)
      .map((res: Response) => {
          return res.json();
        }
      );
  }

  login(username: String, password: String) {
    this.options.withCredentials = true;
    const credentials = {
      username : username,
      password : password
    };
    return this.http.post(this.baseUrl + '/api/login', credentials, this.options)
      .map((res: Response) => {
          return res.json();
        }
      );
  }

  logout() {
    this.options.withCredentials = true;
    return this.http.post(this.baseUrl + '/api/logout', '', this.options)
      .map((res: Response) => {
          const data = res;
        }
      );
  }

  loggedIn() {
    this.options.withCredentials = true;
    return this.http.post(this.baseUrl + '/api/loggedIn', '', this.options)
      .map((res: Response) => {
        const user = res.json();
        if (user !== 0) {
          this.sharedService.user = user; // setting user so as to share with all components
          return true;
        } else {
          this.router.navigate(['/login']);
          return false;
        }
      });
  }

  findUserById(userId: String) {
    // for (let i = 0; i < this.users.length; i++) {
    //   if (this.users[i]._id === userId) {
    //     return this.users[i];
    //   }
    // }
    const url = this.baseUrl + '/api/user/' + userId;
    return this.http.get(url).map(
      (res: Response) => {
        const data = res.json();
        return data;
      }
    );
  }

  findUserByUsername(username: String) {
    // for (let i = 0; i < this.users.length; i++) {
    //   if (this.users[i].username === username) {
    //     return this.users[i];
    //   }
    // }
    const url = this.baseUrl + '/api/user?username=' + username;
    return this.http.get(url).map(
      (res: Response) => {
        return res.json();
      }
    );
  }

  // findUserByCredential(username: String, password: String) {
  //   // for (let i = 0; i < this.users.length; i++) {
  //   //   if (this.users[i].username === username && this.users[i].password === password) {
  //   //     return this.users[i];
  //   //   }
  //   // }
  //   const url = this.baseUrl + '/api/user?username=' + username + '&password=' + password;
  //   return this.http.get(url).map(
  //     (res: Response) => {
  //       return res.json();
  //     }
  //   );
  // }

  updateUser(userId: String, user: User) {
    // for (let i = 0; i < this.users.length; i++) {
    //   if (this.users[i]._id === user._id) {
    //     this.users[i].firstName = user.firstName;
    //     this.users[i].lastName = user.lastName;
    //     this.users[i].emailAddress = user.emailAddress;
    //     return this.users[i];
    //   }
    // }
    const url = this.baseUrl + '/api/user/' + userId;
    return this.http.put(url, user).map((res: Response) => {
      return res.json();
    });
  }

  deleteUser(userId: String) {
    // for (let i = 0; i < this.users.length; i++) {
    //   if (this.users[i]._id === userId) {
    //     this.users.splice(i, 1);
    //   }
    // }
    const url = this.baseUrl + '/api/user/' + userId;
    return this.http.delete(url).map(
      (res: Response) => {
        return res.json();
    });
  }
}
