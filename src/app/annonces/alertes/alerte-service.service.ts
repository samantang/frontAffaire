import { Injectable } from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { AlerteModel } from '../models/alerte-model';
// import 'rxjs/Rx';

@Injectable()
export class AlerteServiceService {

  constructor(private http: Http, private httpClient: HttpClient) { }

  saveAlerte(alerte: AlerteModel) {
    const username = localStorage.getItem('username');
    let headers = new Headers({'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('token')});
    return this.http.post('http://localhost:8080/get-user/add-alertes/' + username + '' , alerte, {headers: headers});
  }

  getMesAlertes () {
    const username = localStorage.getItem('username');
      let headers = new Headers({'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('token')});
      return this.http.post('http://localhost:8080/get-user/mes-alertes' , username, {headers: headers});
  }
}
