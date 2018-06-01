import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import { AlerteModel } from '../../models/alerte-model';
import { AlerteServiceService } from '../alerte-service.service';

@Component({
  selector: 'app-new-alerte',
  templateUrl: './new-alerte.component.html',
  styleUrls: ['./new-alerte.component.css'],
  providers: [AlerteServiceService]
})
export class NewAlerteComponent implements OnInit {
  @ViewChild('f') singupForm: NgForm;
  modalRef: BsModalRef;
  usernameLogged = localStorage.getItem('username');

  typeAlerte = ['offre', 'demande'];

  public titre: string;
  public particuliers: boolean;
  public professionnels: boolean;
  public offre: boolean;
  public demande: boolean;
  public categorie: string;
  public region: string;
  public ville: string;

  alerte: AlerteModel;

  constructor(private alerteService: AlerteServiceService,
              private router: Router,
              private modalService: BsModalService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.titre = this.singupForm.value.titre;
    this.particuliers = this.singupForm.value.particuliers;
    this.professionnels = this.singupForm.value.professionnels;
    this.offre = this.singupForm.value.offre;
    this.demande = this.singupForm.value.demande;
    this.categorie = this.singupForm.value.categorie;
    this.region = this.singupForm.value.region;
    this.ville = this.singupForm.value.ville;
    this.alerte = new AlerteModel(this.titre, this.particuliers, this.professionnels, this.offre,
       this.demande, this.categorie, this.region, this.ville, null);

    this.alerteService.saveAlerte(this.alerte)
    .subscribe(
      data => console.log(data),
      error => console.log(error)
    );
    this.singupForm.reset();
  }
  onConnect () {
    this.router.navigate(['/login']);
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
