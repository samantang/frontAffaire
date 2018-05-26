import { Component, OnInit } from '@angular/core';
import { UserModel } from '../annonces/models/user.model';
import { LoginServiceService } from '../login/login-service.service';
import { ViewChild } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { Router } from '@angular/router';
import { Authorities } from '../annonces/models/authorities-mode';

declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userLoged: UserModel;
  authorities: Authorities [];
  userLog = localStorage.getItem('userLog');
  usernameLog = localStorage.getItem('username');
  authorityAdmin = localStorage.getItem('admin');

  constructor(private loginService: LoginServiceService , private router: Router) { }

  ngOnInit() {
    this.loginService.userConnected
        .subscribe(
          (user: UserModel) => {
            this.userLoged = user;
            this.authorities = user.authorities;
            for (let index = 0; index < user.authorities.length; index++) {
              if (user.authorities[index].authority === 'ROLE_ADMIN') {
                localStorage.setItem('admin', 'true');
              }
            }
          }
        );

        $(document).ready(function () {

          $(window).on('scroll', function () {
              if ($(window).scrollTop() >= 20) {
                  $('.navbar').css({
                      'padding-top': '7px',
                      'padding-bottom': '7px'
                  });
                  $('.navbar').addClass('compressed');
              } else {
                  $('.navbar').css({
                      'padding-top': '10px',
                      'padding-bottom': '10px'
                  });
                  $('.navbar').removeClass('compressed');
                  $('nav li a').removeClass('links_compressed');
              }
          });
      });
  }
  getEvent (event: UserModel) {
  }

  logout() {
    localStorage.clear();
		this.loginService.logout().subscribe(
        res => {
        },
        err => console.log(err)
        );
      location.reload();
      this.router.navigate(['/login']);
    }

}
