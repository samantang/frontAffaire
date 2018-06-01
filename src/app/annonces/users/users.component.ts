import { Component, OnInit, TemplateRef } from '@angular/core';
import { UserModel } from '../models/user.model';
import { AnnonceServiceService } from '../annonce-service.service';
import { LoginServiceService } from '../../login/login-service.service';
import { Router } from '@angular/router';
import { Authorities } from '../models/authorities-mode';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  usernameLogged = localStorage.getItem('username');
  users:  UserModel [];
  user: UserModel;
  userToSetDroit: UserModel;
  modalRef: BsModalRef;

  userLoged: UserModel;
  authorities: Authorities [];
  constructor(private annonceService: AnnonceServiceService,
              private loginService: LoginServiceService ,
              private router: Router,
              private modalService: BsModalService) { }

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
    // window.location.reload();
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
  onGetUser(id: number) {
    this.annonceService.getUser(id).subscribe(
      data => console.log(this.userToSetDroit = JSON.parse(JSON.parse(JSON.stringify(data))._body)),
      error => console.log(error)
    );

  }
  onOpenModalModerateur(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }
  decline(): void {
    this.modalRef.hide();
  }
  confirmModerateur() {
    this.modalRef.hide();
    this.onSetModerateur(this.userToSetDroit.username);
  }
  onOpenModalAdmin(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }
  confirmAdmin() {
    this.modalRef.hide();
    this.onSetAdmin(this.userToSetDroit.username);
  }
  onOpenModalSuperAdmin(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }
  confirmSuperAdmin() {
    this.modalRef.hide();
    this.onSetSuperAdmin(this.userToSetDroit.username);
  }
  retirerRoleParticulier(id: number) {
    this.annonceService.retirerRoleParticulier(id).subscribe(
      data => console.log(this.userToSetDroit = JSON.parse(JSON.parse(JSON.stringify(data))._body)),
      error => console.log(error)
    );
  }
  onOpenModalRetirerRoleModerateur (template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }
  confirmRetirerRoleModerateur() {
    this.modalRef.hide();
    this.onRetirerRoleModerateur(this.userToSetDroit.userId);
  }
  onRetirerRoleModerateur(id: number) {
    this.annonceService.retirerRoleModerateur(id).subscribe(
      data => console.log(this.userToSetDroit = JSON.parse(JSON.parse(JSON.stringify(data))._body)),
      error => console.log(error)
    );
  }
  onOpenModalRetirerRoleAdmin (template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }
  confirmRetirerRoleAdmin() {
    this.modalRef.hide();
    this.onRetirerRoleAdmin(this.userToSetDroit.userId);
  }
  onRetirerRoleAdmin(id: number) {
    this.annonceService.retirerRoleAdmin(id).subscribe(
      data => console.log(this.userToSetDroit = JSON.parse(JSON.parse(JSON.stringify(data))._body)),
      error => console.log(error)
    );
  }
  onOpenModalRetirerRoleSuperAdmin (template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }
  confirmRetirerRoleSuperAmin() {
    this.modalRef.hide();
    this.onRetirerRoleSuperAdmin(this.userToSetDroit.userId);
  }
  onRetirerRoleSuperAdmin(id: number) {
    this.annonceService.retirerRoleSuperAdmin(id).subscribe(
      data => console.log(this.userToSetDroit = JSON.parse(JSON.parse(JSON.stringify(data))._body)),
      error => console.log(error)
    );
  }
}
