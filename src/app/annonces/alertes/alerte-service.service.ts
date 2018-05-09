import { Injectable } from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { AlerteModel } from '../models/alerte-model';
// import 'rxjs/Rx';

@Injectable()
export class AlerteServiceService {

  constructor(private http: Http, private httpClient: HttpClient) { }

  saveAlerte(alerte: AlerteModel) {
    const url = 'http://localhost:8080/add-alerte';
    return this.httpClient.post(url, alerte, {
      reportProgress: true
    }).subscribe(
      success => console.log(success),
      error => console.log(error)
    );
  }

  getMesAlertes () {
    const url = 'http://localhost:8080/mes-alertes';
    return this.http.get(url);
  }
}
