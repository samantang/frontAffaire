import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { AnnonceServiceService } from '../annonce-service.service';
import '../file.js';
import { Annonce } from '../models/annonce.model';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-annonce-detail-page',
  templateUrl: './annonce-detail-page.component.html',
  styleUrls: ['./annonce-detail-page.component.css'],
  providers: [AnnonceServiceService]
})
export class AnnonceDetailPageComponent implements OnInit {
  id: number;
  annonce: Annonce;
  modalRef: BsModalRef;
  messageConfirmation: string;
  pre = false;

  constructor(private route: ActivatedRoute,
              private annonceService: AnnonceServiceService,
              private router: Router,
              private modalService: BsModalService) {
  }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params: Params) => {
        this.id = params['id'];
        this.annonceService.getAnnonceApi(params['id']).subscribe(
          data => console.log(this.annonce = JSON.parse(JSON.parse(JSON.stringify(data))._body)),
          error => console.log(error)
        );
      }
    );
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.messageConfirmation = '';
          this.pre = false;
        }
      );
  }
  onSignalerAnnonce() {
    this.router.navigate(['/signaler-annonce/' + this.id + '']);
  }
  onUserDetails(id: number) {
    this.router.navigate(['user-details/' + id + '']);
  }
  onSendMessage(id: number) {
    this.router.navigate(['send-message/' + id + '']);
  }
  openModalSauvegarde(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }
  confirm(): void {
    this.pre = true;
    this.messageConfirmation = 'Cette annonce a bien ajouté dans la liste de vos Favoris!';
    this.onSauvegarderAnnonce();
    this.modalRef.hide();
  }
  decline(): void {
    this.modalRef.hide();
  }
  onSauvegarderAnnonce() {
    this.annonceService.sauvegardeAnnonce(this.id);
  }

}
