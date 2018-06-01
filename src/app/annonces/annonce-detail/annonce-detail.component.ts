import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';


import { AnnonceServiceService } from '../annonce-service.service';
import { AnnonceDetailModel } from '../models/annonce-details.model';

@Component({
  selector: 'app-annonce-detail',
  templateUrl: './annonce-detail.component.html',
  styleUrls: ['./annonce-detail.component.css'],
  providers: [AnnonceServiceService]
})
export class AnnonceDetailComponent implements OnInit {
  id: number;
  annonce: AnnonceDetailModel;
  private subscription: Subscription;
  tri: string;
  modalRef: BsModalRef;
  messageConfirmation: string;
  pre = false;

  constructor(private annonceService: AnnonceServiceService,
              private route: ActivatedRoute,
              private router: Router,
              private modalService: BsModalService) {
   }
 
  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.annonceService.getAnnonceApi(this.id).subscribe(
            data => console.log(this.annonce = JSON.parse(JSON.parse(JSON.stringify(data))._body) ),
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
      // ajout du nombre du vues pour l'annonce
      this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.annonceService.addNombreVuesAnnonce(this.id).subscribe(
            data => console.log(this.annonce = JSON.parse(JSON.parse(JSON.stringify(data))._body) ),
            error => console.log(error)
          );
        }
      );
  }

  onAnnonceDetails() {
    this.router.navigate(['/annonce-details-page/' + this.id + '']);
  }
  onSignalerAnnonce() {
    this.router.navigate(['/signaler-annonce/' + this.id + '']);
  }
  onSauvegarderAnnonce() {
    this.annonceService.sauvegardeAnnonce(this.id);
  }
  onEcrireMessage() {
    this.router.navigate(['/send-message/' + this.id + '']);
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
}
