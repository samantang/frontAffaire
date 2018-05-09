import { Component, OnInit } from '@angular/core';
import { UserModel } from '../annonces/models/user.model';
import { LoginServiceService } from '../login/login-service.service';
import { ViewChild } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { Router } from '@angular/router';
import { Authorities } from '../annonces/models/authorities-mode';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userLoged: UserModel;
  authorities: Authorities [];

  constructor(private loginService: LoginServiceService , private router: Router) { }

  ngOnInit() {
    this.loginService.userConnected
        .subscribe(
          (user: UserModel) => {
            this.userLoged = user;
            this.authorities = user.authorities;
          }
        );
  }
  getEvent (event: UserModel) {
  }

  logout() {
    localStorage.setItem('userLoggedIn', '');
    localStorage.setItem('username', '');
    localStorage.setItem('token', '');
		this.loginService.logout().subscribe(
        res => {
        },
        err => console.log(err)
        );
      location.reload();
      this.router.navigate(['/login']);
    }

}
