import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import { UserModel } from '../annonces/models/user.model';
import { Subject } from 'rxjs/Subject';
import { EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LoginServiceService {

  userConnected = new EventEmitter<UserModel>();

  constructor (private http: Http, private httpClient: HttpClient) {}

  sendCredential(username: string, password: string) {
    let url = 'http://localhost:8080/index';
    let params = 'username='+username+'&password='+password;
    let headers = new Headers(
    {
      'Content-Type': 'application/x-www-form-urlencoded'
      // 'Access-Control-Allow-Credentials' : true
    });
    return this.http.post(url, params, {headers: headers});
  }
  sendCredential1(username: string, password: string) {
    let url = 'http://localhost:8080/index';
    let params = 'username='+username+'&password='+password;
    let headers = new Headers(
    {
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    return this.http.post(url, params, {headers: headers});
  }
  sendToken(token) {
    let tokenUrl2 = 'http://localhost:8080/get-user/users';
    console.log('Bearer '+token);

    let getHeaders = new Headers({'Authorization':'Bearer '+token});

    return this.http.get(tokenUrl2, {headers: getHeaders});
  }

  logout() {
     let url = 'http://localhost:8080/logout';
     return this.http.get(url);
   }

  signUp (user: UserModel) {

   return this.http.post('http://localhost:8080/inscription', user);
  //   .subscribe(
  //     success => console.log(success ),
  //     error => console.log(error)
  //   );
  }

  getUserLogged(token) {
    let url = 'http://localhost:8080/user' ;
    let getHeaders = new Headers({'Authorization':'Bearer '+token});
    return this.http.post(url, localStorage.getItem('currentUserName'), {headers: getHeaders});
  }
  updatePassword(password: string) {
    let url = 'http://localhost:8080/get-user/update-password/' + password + '' ;
    // let getHeaders = new Headers({'Authorization':'Bearer ' + token});
    console.log('lksldjklksj');
    let headers = new Headers({'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('token')});
    return this.http.post(url, localStorage.getItem('currentUserName'), {headers: headers})
    .subscribe(
      succes => console.log(succes),
      error => console.log(error)
    );
  }


}

