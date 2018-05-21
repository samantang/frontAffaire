import { Component, OnInit, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormGroup, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { LoginServiceService } from '../../login/login-service.service';
import { UserModel } from '../../annonces/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('f') singupForm: NgForm;
  loggedIn: boolean;
  // username: string;
  // password: string;
  typeUser = '';

  public id: number;
  public username: string;
  public phone: number;
  public email: string;
  public firstName: string;
  public lastName: string;
  public ville: string;
  public region: string;
  public type: string;
  public nomSociete: string;
  public numeroSiretSocite: string;
  public adresseSocite: string;
  public sitewebSocite: string;
  public password: string;

  user: UserModel;
  erreurLogin = '';
  erreurSignUp = '';

  @Output() userConnected: EventEmitter <UserModel> = new EventEmitter();
  userChild: UserModel;
  private currentUserName;

	constructor (private loginService: LoginServiceService, private router: Router) {
    this.currentUserName = localStorage.getItem('currentUserName');
    if ( localStorage.getItem('userLoggedIn') === '' || localStorage.getItem('userLoggedIn') === null) {
      this.loggedIn = false;
    } else {
      this.loggedIn = true;
    }
  }
  
  onSubmit() {
  	// this.loginService.sendCredential(this.username, this.password).subscribe(
    //   res => {
    //     this.loggedIn = true;
    //     localStorage.setItem('userLoggedIn', 'true');
    //      console.log(this.user = JSON.parse(JSON.parse(JSON.stringify(res))._body) );
    //      localStorage.setItem('username', this.user.username);
    //      localStorage.setItem('username', this.user.username);
    //     this.loginService.userConnected.emit(JSON.parse(JSON.parse(JSON.stringify(res))._body));
    //     // location.reload();
    //   },
    //   err => console.log(err)
    // );

    this.loginService.sendCredential(this.username, this.password).subscribe(
      data => {
                // this.loggedIn = true;
                localStorage.setItem('userLoggedIn', 'true');
                localStorage.setItem('token', JSON.parse(JSON.stringify(data))._body);
                localStorage.setItem('username', this.username);
                localStorage.setItem('currentUserName', this.username);

                this.loginService.getUserLogged(localStorage.getItem('token')).subscribe (
                  res => {
                    this.loginService.userConnected.emit(JSON.parse(JSON.parse(JSON.stringify(res))._body));
                    localStorage.setItem('userLog', JSON.parse(JSON.parse(JSON.stringify(res))._body));
                    // location.reload();

                  
                    // this.loginService.userConnected
                    // .subscribe(
                    //   (user: UserModel) => {
                    //     // this.userLoged = user;
                    //     // this.authorities = user.authorities;
                    //     for (let index = 0; index < user.authorities.length; index++) {
                    //       if (user.authorities[index].authority === 'ROLE_ADMIN') {
                    //         localStorage.setItem('admin', 'true');
                    //       }
                    //     }
                    //   }
                    // );
                    // location.reload();

                    this.router.navigate(['/annonces']);
                    location.reload();
                  },
                  err => {
                    console.log(err);
                  }
                );

              },
      error => {
        this.erreurLogin = 'username ou mot de passe nont correcte';
        console.log(error);
      }
    );
  }

  logout() {
    this.loggedIn = false;
		this.loginService.logout().subscribe(
        res => {
          localStorage.setItem('userLoggedIn', '');
          localStorage.setItem('username', '');
          localStorage.setItem('token', '');
          localStorage.setItem('currentUserName', '');
        },
        err => console.log(err)
        );
      location.reload();
      this.router.navigate(['/annonces']);
    }

  ngOnInit() {}

  onSelectType (event: any) {
    this.typeUser = event;
  }

  onSignup(form: NgForm) {
    this.username = this.singupForm.value.usernameInscription;
    this.phone = this.singupForm.value.tel;
    this.email = this.singupForm.value.email;
    this.type = this.singupForm.value.type;
    this.nomSociete = this.singupForm.value.nomSociete;
    this.numeroSiretSocite = this.singupForm.value.numeroSiretSocite;
    this.adresseSocite = this.singupForm.value.adresseSocite;
    this.sitewebSocite = this.singupForm.value.sitewebSocite;
    this.password = this.singupForm.value.passwordInscription;

    this.user = new UserModel(this.id, this.username, this.email, this.phone,
       this.firstName, this.lastName, this.ville, this.region, this.type,
       this.nomSociete, this.numeroSiretSocite, this.adresseSocite, this.sitewebSocite, this.password, '', null, '', '', '');

       this.loginService.signUp(this.user)
       .subscribe(
         res => {
          console.log(this.user = JSON.parse(JSON.parse(JSON.stringify(res))._body));
          console.log(this.erreurSignUp = this.user.erreur);
          this.onLoginAfterSignUp(this.user);
         },
         err => {
            console.log(err);
         }
       );
  }
  onClear() {
    this.singupForm.reset();
  }
  onLoginAfterSignUp(user: UserModel) {
    // on se connecte que si il n'ya pas d'erreur
    if (user.erreur === '') {
      this.loginService.sendCredential(this.username, this.password).subscribe(
        res => {
          this.loggedIn = true;
          localStorage.setItem('userLoggedIn', 'true');
           this.loginService.userConnected.emit(JSON.parse(JSON.parse(JSON.stringify(res))._body));
           this.router.navigate(['/annonces']);
        },
        err => console.log(err)
      );
    }
  }
}
