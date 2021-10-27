import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };

  constructor(private http: HttpClient) { }
  
  //Http methods
  login(authCredentials)
  {
    //post request made to nodejs on url /authenticate
    return this.http.post(environment.apiBaseUrl + '/authenticate', authCredentials,this.noAuthHeader);
  }

  getUserProfile() {
    return this.http.get(environment.apiBaseUrl + '/userprofile');
  }

  //Helper methods
  setToken(token: string) {
    localStorage.setItem('token', token);
    //console.log(localStorage.getItem('token'));
  }

  getToken() {
    return localStorage.getItem('token');
  }

  deleteToken() {
    localStorage.removeItem('token');
  }

  getUserPayload() {
    var token = this.getToken();
    if (token) {
      var userPayload = atob(token.split('.')[1]);
      return JSON.parse(userPayload);
    }
    else
      return null;
  }

  isLoggedIn() {
    var userPayload = this.getUserPayload();
    if (userPayload)
      return userPayload.exp > Date.now() / 1000;
    else
      return false;
  }
}
