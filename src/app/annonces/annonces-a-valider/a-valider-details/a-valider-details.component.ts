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
  onValiderAnnonce(id: number) {
    this.annonceService.validerAnnonce(this.id).subscribe(
      data => console.log(JSON.parse(JSON.parse(JSON.stringify(data))._body)),
      error => console.log(error)
    );
    this.router.navigate(['/annonces']);
  }
  validerModal (template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  onEcrireMessage() {
    this.router.navigate(['/send-message/' + this.id + '']);
  }
  onInvaliderAnnonce() {
    this.annonceService.inValiderAnnonce(this.id).subscribe(
      data => console.log(JSON.parse(JSON.parse(JSON.stringify(data))._body)),
      error => console.log(error)
    );
    this.router.navigate(['/annonces']);
  }

}
