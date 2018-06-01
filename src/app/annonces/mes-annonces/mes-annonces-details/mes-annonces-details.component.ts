import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import { AnnonceServiceService } from '../../annonce-service.service';
import { Annonce } from '../../models/annonce.model';

@Component({
  selector: 'app-mes-annonces-details',
  templateUrl: './mes-annonces-details.component.html',
  styleUrls: ['./mes-annonces-details.component.css']
})
export class MesAnnoncesDetailsComponent implements OnInit {
  annonce: Annonce;
  id: number;
  modalRef: BsModalRef;

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
            data => console.log(this.annonce = JSON.parse(JSON.parse(JSON.stringify(data))._body)),
            error => console.log(error)
          );
        }
      );
  }
  onModifierAnnonce() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }
  onDepublierAnnonce () {
    // mis à jour de l'annonce
    this.annonceService.depublierAnnonce(this.id).subscribe(
      data => console.log(this.annonce = JSON.parse(JSON.parse(JSON.stringify(data))._body)),
      error => console.log(error)
    );
    // recuperation pour la mise à jour de l'affichage
    this.annonceService.getAnnonceApi(this.id).subscribe(
      data => console.log(this.annonce = JSON.parse(JSON.parse(JSON.stringify(data))._body)),
      error => console.log(error)
    );
  }
  onRePublierAnnonce() {
    // mis à jour de l'annonce
    this.annonceService.repubierAnnonce(this.id).subscribe(
      data => console.log(this.annonce = JSON.parse(JSON.parse(JSON.stringify(data))._body)),
      error => console.log(error)
    );
    // recuperation pour la mise à jour de l'affichage
    this.annonceService.getAnnonceApi(this.id).subscribe(
      data => console.log(this.annonce = JSON.parse(JSON.parse(JSON.stringify(data))._body)),
      error => console.log(error)
    );
  }
  onSupprimerAnnonce() {
    this.annonceService.suppirmerAnnonce(this.id).subscribe(
      data => console.log(this.annonce = JSON.parse(JSON.parse(JSON.stringify(data))._body)),
      error => console.log(error)
    );
  }

  // onQuestionSupprimerAnnonce() {

  // }
  openModalSuppression(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }
  confirm(): void {
    // this.pre = true;
    this.modalRef.hide();
    this.onSupprimerAnnonce();
  }

  decline(): void {
    this.modalRef.hide();
  }
}
