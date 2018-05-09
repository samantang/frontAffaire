import { Component, OnInit } from '@angular/core';
import { AlerteModel } from '../models/alerte-model';
import { AlerteServiceService } from './alerte-service.service';

@Component({
  selector: 'app-alertes',
  templateUrl: './alertes.component.html',
  styleUrls: ['./alertes.component.css'],
  providers: [AlerteServiceService]
})
export class AlertesComponent implements OnInit {

  alertes: AlerteModel [];
  constructor(private alerteService: AlerteServiceService) { }

  ngOnInit() {
    this.alerteService.getMesAlertes().subscribe(
      data => console.log(this.alertes = JSON.parse(JSON.parse(JSON.stringify(data))._body)),
      error => console.log(error)
    );
  } 

}
