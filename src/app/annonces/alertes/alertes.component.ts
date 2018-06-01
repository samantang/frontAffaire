import { Component, OnInit, TemplateRef } from '@angular/core';
import { AlerteModel } from '../models/alerte-model';
import { AlerteServiceService } from './alerte-service.service';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';


@Component({
  selector: 'app-alertes',
  templateUrl: './alertes.component.html',
  styleUrls: ['./alertes.component.css'],
  providers: [AlerteServiceService]
})
export class AlertesComponent implements OnInit {

  alertes: AlerteModel [];
  alerteAsupprimer: AlerteModel;
  modalRef: BsModalRef;
  constructor(private alerteService: AlerteServiceService,
              private modalService: BsModalService) { }

  ngOnInit() {
    this.alerteService.getMesAlertes().subscribe(
      data => console.log(this.alertes = JSON.parse(JSON.parse(JSON.stringify(data))._body)),
      error => console.log(error)
    );
  }
  onQuestionSupprimerAlerte(id: number) {
    this.alerteService.getAlerte(id).subscribe(
      data => console.log(this.alerteAsupprimer = JSON.parse(JSON.parse(JSON.stringify(data))._body)),
      error => console.log(error)
    );
  }

  openModalSuppression(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }

  confirm(): void {
    // this.pre = true;
    this.modalRef.hide();
    this.onSupprimerAlerte();
  }

  decline(): void {
    this.modalRef.hide();
  }

  onSupprimerAlerte() {
    this.alerteService.supprimerAlerte(this.alerteAsupprimer.id).subscribe(
      data => {console.log(this.alerteAsupprimer = JSON.parse(JSON.parse(JSON.stringify(data))._body));
              window.location.reload(); } ,
      error => console.log(error)
    );

  }

}
