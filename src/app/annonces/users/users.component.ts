import { Component, OnInit } from '@angular/core';
import { UserModel } from '../models/user.model';
import { AnnonceServiceService } from '../annonce-service.service';
import { LoginServiceService } from '../../login/login-service.service';
import { Router } from '@angular/router';
import { Authorities } from '../models/authorities-mode';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  usernameLogged = localStorage.getItem('username');
  users:  UserModel [];
  user: UserModel;

  userLoged: UserModel;
  authorities: Authorities [];
  constructor(private annonceService: AnnonceServiceService, private loginService: LoginServiceService , private router: Router) { }

  ngOnInit() {
    this.annonceService.getUsers().subscribe(
      data => console.log( this.users = JSON.parse(JSON.parse(JSON.stringify(data))._body)),
      error => console.log(error)
    );
    this.loginService.userConnected
        .subscribe(
          (user: UserModel) => {
            this.userLoged = user;
            this.authorities = user.authorities;
          }
        );
  }
  onSetModerateur(username: any) {
    this.annonceService.setModerateur(username).subscribe(
      data => console.log(this.user = JSON.parse(JSON.parse(JSON.stringify(data))._body)),
      error => console.log(this.user = JSON.parse(JSON.parse(JSON.stringify(error))._body))
    );
  }
  onSetAdmin(email: any) {
    this.annonceService.setAdmin(email).subscribe(
      data => console.log(this.user = JSON.parse(JSON.parse(JSON.stringify(data))._body)),
      error => console.log(this.user = JSON.parse(JSON.parse(JSON.stringify(error))._body))
    );
  }
  onSetSuperAdmin(email: any) {
    this.annonceService.setSuperAdmin(email).subscribe(
      data => console.log(this.user = JSON.parse(JSON.parse(JSON.stringify(data))._body)),
      error => console.log(this.user = JSON.parse(JSON.parse(JSON.stringify(error))._body))
    );
  }
  consulterAnnonce(id: any) {
    this.router.navigate(['/user-details/' + id + '']);
  }

}
