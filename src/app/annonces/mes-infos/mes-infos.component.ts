import { Component, OnInit, ViewChild } from '@angular/core';

import { NgForm } from '@angular/forms';

import { UserModel } from '../models/user.model';
import { AnnonceServiceService } from '../annonce-service.service';
import { LoginServiceService } from '../../login/login-service.service';

@Component({
  selector: 'app-mes-infos',
  templateUrl: './mes-infos.component.html',
  styleUrls: ['./mes-infos.component.css'],
  providers: [AnnonceServiceService]
})
export class MesInfosComponent implements OnInit {

  @ViewChild('f') singupForm: NgForm;
  userLogged: UserModel;
  usernameLogged = localStorage.getItem('username');

  constructor(private annonceService: AnnonceServiceService, private loginService: LoginServiceService) { }

  ngOnInit() {
    this.annonceService.getMesInfos().subscribe(
      data => console.log(this.userLogged = JSON.parse(JSON.parse(JSON.stringify(data))._body)),
      error => console.log(error)
    );
  }
  onSubmit(form: NgForm) {
    console.log(this.singupForm.value.password);
    console.log(this.singupForm.value.newpassword);
    this.loginService.updatePassword(this.singupForm.value.newpassword);
  }

}
