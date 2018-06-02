import { Injectable, EventEmitter } from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

import { HttpErrorResponse } from '@angular/common/http/src/response';
import { Annonce } from './models/annonce.model';
import { AnnonceSignalee } from './models/user-annonce-signalee';
import { UserAnnoncePostee } from './models/user-annonce-postee.model';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { AnnonceListeComponent } from './annonce-liste/annonce-liste.component';
import { UserModel } from './models/user.model';
import { UserMessage } from './models/user-message';
import { Recherche } from './models/recherche-model';


@Injectable()
export class AnnonceServiceService {
   formData  = new FormData();
   formData1  = new FormData();
   formData2  = new FormData();
   formData3  = new FormData();
   formData4  = new FormData();

   ajout: any;
   erreurAjout: any;

   choixTri = new BehaviorSubject  ('aa');

   user_annoncesPostees: UserAnnoncePostee;

   userMessage: UserMessage;

   

  constructor(private http: Http, private httpClient: HttpClient) { }


  private annonces: Annonce [] = [

  ];
  private annoncesSauvegardes: Annonce [] = [];
  usernameLogged = localStorage.getItem('username');
  private subject = new Subject<any>();
  // private subjectRegion = new BehaviorSubject('x');
  // public regionChoisi = this.subjectRegion.asObservable();

  // choixDeRegion(region: string) {
  //   console.log('dans le service ' + region);
  //   this.subjectRegion.next(region);
  //   console.log('dans le service subjet: ' + this.subjectRegion.value);
  // }

  

    sendMessage(message: string) {
        this.subject.next({ text: message });
        console.log('send the messageService .....' + message);
    }  

    clearMessage() {
        this.subject.next();
    }

    getMessage(): Observable<any> {
        return this.subject.asObservable();
    }

    getUsers() {
      const url = 'http://localhost:8080/get-user/get-users';
      let headers = new Headers({'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('token')});
      return this.http.post(url, this.usernameLogged, {headers: headers});
    }
    getUser(id: number) {
      const url = 'http://localhost:8080/get-user/get-user/' + id + '';
      let headers = new Headers({'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('token')});
      return this.http.post(url, this.usernameLogged, {headers: headers});
    }

  getAnnoncesApi() {
    const url = 'http://localhost:8080/get-annonces';
    return this.http.get(url);
  }
  getNbAnnonces () {
    const url = 'http://localhost:8080/get-nb-nnonces';
    return this.http.get(url);
  }
  getMesAnnonces () {
    const url = 'http://localhost:8080/get-user/mes-annonces';
    let headers = new Headers({'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('token')});
    return this.http.post(url, this.usernameLogged, {headers: headers});
  }
  getMesAnnoncesId (id: number) {
    const url = 'http://localhost:8080/get-user/mes-annonces-id/' + id + '';
    let headers = new Headers({'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('token')});
    return this.http.post(url, this.usernameLogged, {headers: headers});
  }
  addNombreVuesAnnonce(id: number) {
    const url = 'http://localhost:8080/get-user/add-nb-vues-annonce/' + id + '';
    let headers = new Headers({'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('token')});
    return this.http.get(url, {headers: headers});
  }
  // getMesAnnoncesValidees () {
  //   const url = 'http://localhost:8080/get-user/mes-annonces-validees';
  //   let headers = new Headers({'Content-Type': 'application/json', 'Authorization': 'Bearer '+localStorage.getItem('token')});
  //   return this.http.post(url, this.usernameLogged, {headers: headers});
  // }
  // getMesAnnoncesInvalidees () {
  //   const url = 'http://localhost:8080/get-user/mes-annonces-validees';
  //   let headers = new Headers({'Content-Type': 'application/json', 'Authorization': 'Bearer '+localStorage.getItem('token')});
  //   return this.http.post(url, this.usernameLogged, {headers: headers});
  // }
  getMesInfos () {
    const url = 'http://localhost:8080/get-user/mes-infos';
    let headers = new Headers({'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('token')});
    return this.http.post(url, this.usernameLogged, {headers: headers});
  }
  getMesAnnonceValidees () {
    const url = 'http://localhost:8080/get-user/mes-annonces-validees';
    let headers = new Headers({'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('token')});
    return this.http.post(url, this.usernameLogged, {headers: headers});
  }
  getSesAnnonceValidees (id: number) {
    const url = 'http://localhost:8080/get-user/ses-annonces-validees/' + id + '';
    let headers = new Headers({'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('token')});
    return this.http.get(url, {headers: headers});
  }
  getMesAnnoncesInvalidees () {
    const url = 'http://localhost:8080/get-user/mes-annonces-invalidees';
    let headers = new Headers({'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('token')});
    return this.http.post(url, this.usernameLogged, {headers: headers});
  }
  getSesAnnoncesInvalidees (id: number) {
    const url = 'http://localhost:8080/get-user/ses-annonces-invalidees/' + id + '';
    let headers = new Headers({'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('token')});
    return this.http.get(url, {headers: headers});
  }
  getMesAnnoncesSignalees () {
    const url = 'http://localhost:8080/get-user/mes-annonces-signalees';
    let headers = new Headers({'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('token')});
    return this.http.post(url, this.usernameLogged, {headers: headers});
  }
  getSesAnnoncesSignalees (id: number) {
    const url = 'http://localhost:8080/get-user/ses-annonces-signalees/' + id + '';
    let headers = new Headers({'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('token')});
    return this.http.get(url, {headers: headers});
  }
  getMesAnnoncesDepubliees () {
    const url = 'http://localhost:8080/get-user/mes-annonces-depubliees';
    let headers = new Headers({'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('token')});
    return this.http.post(url, this.usernameLogged, {headers: headers});
  }
  getSesAnnoncesDepubliees (id: number) {
    const url = 'http://localhost:8080/get-user/ses-annonces-depubliees/' + id + '';
    let headers = new Headers({'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('token')});
    return this.http.get(url, {headers: headers});
  }
  getAnnonceApi(index: number) {
    const headers1 = new Headers({'Content-Type': 'application/json'});
    const url = 'http://localhost:8080/getAnnonce/' + index + '';
    if (this.usernameLogged === '') {
      this.usernameLogged = 'x';
    }

    return this.http.post(url, this.usernameLogged);
  }

  getAnnoncesAvalider() {
    const usernameLogged = localStorage.getItem('username');
    const url = 'http://localhost:8080/get-user/annonces-a-valider';
    let headers = new Headers({'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('token')});
    return this.http.post(url,  usernameLogged,  {headers: headers});
  }

  getAnnoncesSignalees() {
    const corps = 'body';
    const url = 'http://localhost:8080/get-user/annonces-signalees';
    // return this.http.get(url);
    let headers = new Headers({'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('token')});
    return this.http.post(url,  this.usernameLogged,  {headers: headers});
  }

  changerPagination (page: number) {
    const url = 'http://localhost:8080/annonces/page/' + page + '';
    return this.http.get(url);
  }

  attachePhotos(selectedFiles) {
    for (const file of selectedFiles){
      this.formData.append('files', file);
    }
  }
  sauverPhotoAnnonce () {
    console.log('enregistrement des photos ... ' );
    let headers = new Headers({'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('token')});
    this.http
        .post('http://localhost:8080/add-photo', this.formData, {
        //  headers: headers
        })
        .subscribe(
          success => console.log(success),
          error => console.log(error)
        );
  }
  
  sauverPhotoAnnonce1 () {
    console.log('enregistrement des photos1 ... ' );
    let headers = new Headers({'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('token')});
    this.http
        .post('http://localhost:8080/add-photo1', this.formData1, {
          // headers: headers
          // observe: 'events',
          // reportProgress: true
        })
        .subscribe(
          success => console.log(success),
          error => console.log(error)
        );
  }
  sauverPhotoAnnonce2 () {
    console.log('enregistrement des photos2 ... ' );
    let headers = new Headers({'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('token')});
    this.http
        .post('http://localhost:8080/add-photo2', this.formData2, {
          // headers: headers
          // observe: 'events',
          // reportProgress: true
        })
        .subscribe(
          success => console.log(success),
          error => console.log(error)
        );
  }
  sauverPhotoAnnonce3 () {
    console.log('enregistrement des photos3 ... ' );
    let headers = new Headers({'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('token')});
    this.http
        .post('http://localhost:8080/add-photo3', this.formData3, {
          // headers: headers
          // observe: 'events',
          // reportProgress: true
        })
        .subscribe(
          success => console.log(success),
          error => console.log(error)
        );
  }
  sauverPhotoAnnonce4 () {
    console.log('enregistrement des photos4 ... ' );
    let headers = new Headers({'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('token')});
    this.http
        .post('http://localhost:8080/add-photo4', this.formData4, {
          // headers: headers
          // observe: 'events',
          // reportProgress: true
        })
        .subscribe(
          success => console.log(success),
          error => console.log(error)
        );
  }

  sauverAnnonce (donnees: Annonce) {
    
    console.log('enregistrement des données du formulaire ... ' );
    let headers = new Headers({'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('token')});
    return this.http.post('http://localhost:8080/add-annonce/' + this.usernameLogged + '' , donnees, {
      // headers: headers
      // observe: 'events',
      // reportProgress: true
    })
    .subscribe(
      success => this.ajout = success,
      error => console.log(error)
    );
    // return this.ajout;
  }
  updatePhotoAnnonce () {
    console.log('update photo annonce ... ' + this.formData );
    // let headers = new Headers({'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('token')});
    this.http
        .post('http://localhost:8080/update-photo', this.formData, {
        //  headers: headers
        })
        .subscribe(
          success => console.log(success),
          error => console.log(error)
        );
  }
  
  updatePhotoAnnonce1 () {
    console.log('enregistrement des photos1 ... ' );
    // let headers = new Headers({'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('token')});
    this.http
        .post('http://localhost:8080/update-photo1', this.formData1, {
          // headers: headers
          // observe: 'events',
          // reportProgress: true
        })
        .subscribe(
          success => console.log(success),
          error => console.log(error)
        );
  }
  updatePhotoAnnonce2 () {
    console.log('enregistrement des photos2 ... ' );
    let headers = new Headers({'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('token')});
    this.http
        .post('http://localhost:8080/update-photo2', this.formData2, {
          // headers: headers
          // observe: 'events',
          // reportProgress: true
        })
        .subscribe(
          success => console.log(success),
          error => console.log(error)
        );
  }
  updatePhotosAnnonce () {
    // si on a pas chanrge de photo, alors on a pas voulu changer
    // if(this.formData !== undefined) {
    console.log('mis a jour des photos ... ' );
    let headers = new Headers({'Content-Type': 'application/json', 'Authorization': 'Bearer '+localStorage.getItem('token')});

    this.http
        .put('http://localhost:8080/update-photo', this.formData, {
          // headers: headers
          // observe: 'events',
          // reportProgress: true
        })
        .subscribe(
          success => console.log(success),
          error => console.log(error)
        );
      // }
  }

  updateAnnonce (annonce: Annonce) {
    // let headers = new Headers({'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('token')});
    console.log('les infos de annonce :' + annonce.titre + ' description: ' + annonce.description + ' cheminImage' + annonce.cheminImage);
    this.http.post('http://localhost:8080/update-annonce/' + localStorage.getItem('username') + '', annonce, {
        // headers: headers
    })
    .subscribe(
      success => console.log(success),
      error => console.log(error)
    );
  }
  
    enregisteNom(fichiers) {
      console.log('enregistement de photo dans le service ...' + fichiers);
      for (const fichier of fichiers) {
        this.formData.append('fichier', fichier);
      }
    }
    enregisteNom1(fichiers) {
      console.log('enregistement de photo1 dans le service ...');
      for (const fichier of fichiers) {
        this.formData1.append('fichier', fichier);
      }
    }
    enregisteNom2(fichiers) {
      console.log('enregistement de  photo2 dans le service ...');
      for (const fichier of fichiers) {
        this.formData2.append('fichier', fichier);
      }
    }
    enregisteNom3(fichiers) {
      console.log('enregistement de photo3 dans le service ...');
      for (const fichier of fichiers) {
        this.formData3.append('fichier', fichier);
      }
    }
    enregisteNom4(fichiers) {
      console.log('enregistement de photo4 dans le service ...');
      for (const fichier of fichiers) {
        this.formData4.append('fichier', fichier);
      }
    }
    sauvegardeAnnonce(id: number) {
    const usernameLogged = localStorage.getItem('username');
    const url = 'http://localhost:8080/get-user/add-favori/' + id + '';
    let headers = new Headers({'Content-Type': 'application/json', 'Authorization': 'Bearer '+localStorage.getItem('token')});
       this.http.post(url, usernameLogged, {
        headers: headers
       }).subscribe(
         success => console.log(success),
         error => console.log(error)
       );
    }
    mesFavoris () {
      const usernameLogged = localStorage.getItem('username');
      const url = 'http://localhost:8080/get-user/mes-favoris';
      let headers = new Headers({'Content-Type': 'application/json', 'Authorization': 'Bearer '+localStorage.getItem('token')});
      return this.http.post(url, usernameLogged, {headers: headers});
    }
    deleteFavori(id: number) {
      const usernameLogged = localStorage.getItem('username');
      let headers = new Headers({'Content-Type': 'application/json', 'Authorization': 'Bearer '+localStorage.getItem('token')});
      const url = 'http://localhost:8080/get-user/delete-favori/' + id + '';
      this.http.post(url, usernameLogged,{
        headers: headers
        // reportProgress: true
      }).subscribe (
        success => console.log(success),
        error => console.log(error)
      );
    }
    validerAnnonce(id: number) {
      const usernameLogged = localStorage.getItem('username');
      const url = 'http://localhost:8080/get-user/valider-annonce/' + id + '';
      let headers = new Headers({'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('token')});
      return this.http.post(url, usernameLogged, {headers: headers});
    }

    inValiderAnnonce(id: number) {
      const usernameLogged = localStorage.getItem('username');
      const url = 'http://localhost:8080/get-user/invalider-annonce/' + id + '';
      let headers = new Headers({'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('token')});
      return this.http.post(url, usernameLogged, {headers: headers});
    }

    signalerAnnonce(donnees: AnnonceSignalee) {
      const usernameLogged = localStorage.getItem('username');
      let headers = new Headers({'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('token')});
      this.http.post('http://localhost:8080/get-user/signaler-annonce/' + usernameLogged + '', donnees, {
        headers : headers
      // observe: 'events',
      // reportProgress: true
    })
    .subscribe(
      success => console.log(success),
      error => console.log(error)
    );
    }
    chercherAnnonces(recherche: Recherche) {
      return this.http.post('http://localhost:8080/chercher-annonces', recherche);
    }
    depublierAnnonce (id: number) {
      const usernameLogged = localStorage.getItem('username');
      let headers = new Headers({'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('token')});
      return this.http.post('http://localhost:8080/get-user/depublier-annonce/' + id + '', usernameLogged, {headers: headers});
    }
    repubierAnnonce(id: number) {
      const usernameLogged = localStorage.getItem('username');
      let headers = new Headers({'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('token')});
      return this.http.post('http://localhost:8080/get-user/republier-annonce/' + id + '', usernameLogged, {headers: headers});
    }
    suppirmerAnnonce(id: number) {
      const usernameLogged = localStorage.getItem('username');
      let headers = new Headers({'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('token')});
      return this.http.post('http://localhost:8080/get-user/supprimer-annonce/' + id + '', usernameLogged, {headers: headers});
    }
    sendMessageToSomeone(id: number, userMessage: UserMessage) {
     console.log(id + '' + userMessage.message);
      let headers = new Headers({'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('token')});
      return this.http.post('http://localhost:8080/get-user/send-message/' + id + '', userMessage, {headers: headers})
        .subscribe(
          succes => console.log(succes),
          error => console.log(error)
        );
    }
    setModerateur(username: string){
      const usernameLogged = localStorage.getItem('username');
      let headers = new Headers({'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('token')});
      return this.http.post('http://localhost:8080/get-user/set-moderateur/' + username + '', usernameLogged, {headers: headers});
    }
    setAdmin(username: string){
      const usernameLogged = localStorage.getItem('username');
      let headers = new Headers({'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('token')});
      return this.http.post('http://localhost:8080/get-user/set-admin/' + username + '', usernameLogged, {headers: headers});
    }
    setSuperAdmin(username: string){
      const usernameLogged = localStorage.getItem('username');
      let headers = new Headers({'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('token')});
      return this.http.post('http://localhost:8080/get-user/set-super-admin/' + username + '', usernameLogged, {headers: headers});
    }
    suspendreCompte (id: number) {
      const usernameLogged = localStorage.getItem('username');
      let headers = new Headers({'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('token')});
      return this.http.post('http://localhost:8080/get-user/suspendre-compte/' + id + '', usernameLogged, {headers: headers});
    }
    activerCompte (id: number) {
      const usernameLogged = localStorage.getItem('username');
      let headers = new Headers({'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('token')});
      return this.http.post('http://localhost:8080/get-user/activer-compte/' + id + '', usernameLogged, {headers: headers});

    }
    retirerRoleParticulier(id: number) {
      let headers = new Headers({'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('token')});
      return this.http.get('http://localhost:8080/get-user/retirer-role-particulier/' + id + '', {headers: headers});
    }
    retirerRoleModerateur(id: number) {
      let headers = new Headers({'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('token')});
      return this.http.get('http://localhost:8080/get-user/retirer-role-moderateur/' + id + '', {headers: headers});
    }
    retirerRoleAdmin(id: number) {
      let headers = new Headers({'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('token')});
      return this.http.get('http://localhost:8080/get-user/retirer-role-admin/' + id + '', {headers: headers});
    }
    retirerRoleSuperAdmin(id: number) {
      let headers = new Headers({'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('token')});
      return this.http.get('http://localhost:8080/get-user/retirer-role-super-admin/' + id + '', {headers: headers});
    }
  }
