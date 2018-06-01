import { Component, OnInit , TemplateRef} from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { AnnonceServiceService } from '../../annonce-service.service';
import { Annonce } from '../../models/annonce.model';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-a-valider-details',
  templateUrl: './a-valider-details.component.html',
  styleUrls: ['./a-valider-details.component.css'],
  providers: [AnnonceServiceService]
})
export class AValiderDetailsComponent implements OnInit {
  annonce: Annonce;
  id: number;
  modalRef: BsModalRef;
  annonceAvalider: Annonce;

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
  onValiderAnnonce() {
    this.annonceService.validerAnnonce(this.id).subscribe(
      data => console.log(JSON.parse(JSON.parse(JSON.stringify(data))._body)),
      error => console.log(error)
    );
    this.router.navigate(['/annonces-a-valider']);
  }
  // validerModal (template: TemplateRef<any>) {
  //   this.modalRef = this.modalService.show(template);
  // }
  onEcrireMessage() {
    this.router.navigate(['/send-message/' + this.id + '']);
  }
  onInvaliderAnnonce() {
    this.annonceService.inValiderAnnonce(this.id).subscribe(
      data => console.log(JSON.parse(JSON.parse(JSON.stringify(data))._body)),
      error => console.log(error)
    );
    this.router.navigate(['/annonces-a-valider']);
  }
  onModalValidationAnnonce(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }
  onQuestionValiderAnnonce() {
    this.annonceService.getAnnonceApi(this.id).subscribe(
      data => console.log(this.annonceAvalider = JSON.parse(JSON.parse(JSON.stringify(data))._body)),
      error => console.log(error)
    );
  }
  confirm(): void {
    // this.pre = true;
    this.modalRef.hide();
    this.onValiderAnnonce();
  }

  decline(): void {
    this.modalRef.hide();
  }
  onModalInValidationAnnonce(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }
  onQuestionInValiderAnnonce() {
    this.annonceService.getAnnonceApi(this.id).subscribe(
      data => console.log(this.annonceAvalider = JSON.parse(JSON.parse(JSON.stringify(data))._body)),
      error => console.log(error)
    );
  }
  confirminvalidation(): void {
    // this.pre = true;
    this.modalRef.hide();
    this.onInvaliderAnnonce();
  }

  declineinvalidation(): void {
    this.modalRef.hide();
  }

}
