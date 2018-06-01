import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import { AnnonceServiceService } from '../../annonce-service.service';
import { Annonce } from '../../models/annonce.model';

@Component({
  selector: 'app-annonces-signalees-details',
  templateUrl: './annonces-signalees-details.component.html',
  styleUrls: ['./annonces-signalees-details.component.css'],
  providers: [AnnonceServiceService]
})
export class AnnoncesSignaleesDetailsComponent implements OnInit {

  annonce: Annonce;
  id: number;

  modalRef: BsModalRef;

  constructor(private annonceService: AnnonceServiceService,
    private route: ActivatedRoute,
    private router: Router,
    private modalService: BsModalService) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = params['id'];
        this.annonceService.getAnnonceApi(this.id).subscribe(
          data => console.log(this.annonce = JSON.parse(JSON.parse(JSON.stringify(data))._body)),
          error => console.log(error)
        );
      }
    );
  }
  depublierAnnonce () {
    this.annonceService.depublierAnnonce(this.id).subscribe(
      data => console.log(this.annonce = JSON.parse(JSON.parse(JSON.stringify(data))._body)),
      error => console.log(error)
    );
    this.router.navigate(['/annonces-signalees']);
  }
  republierAnnonce () {
    this.annonceService.repubierAnnonce(this.id).subscribe(
      data => console.log(this.annonce = JSON.parse(JSON.parse(JSON.stringify(data))._body)),
      error => console.log(error)
    );
    this.router.navigate(['/annonces-signalees/' + this.id + '']);
  }
  onEcrireMessage() {
    this.router.navigate(['/send-message/' + this.id + '']);
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-md'});
  }

  confirm(): void {
    this.modalRef.hide();
    this.depublierAnnonce();
  }

  decline(): void {
    this.modalRef.hide();
  }

}
