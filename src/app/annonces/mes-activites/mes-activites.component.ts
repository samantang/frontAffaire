import { Component, OnInit } from '@angular/core';
import { UserModel } from '../models/user.model';
import { Annonce } from '../models/annonce.model';
import { AnnonceServiceService } from '../annonce-service.service';

import { TabsModule } from 'ngx-bootstrap/tabs';

@Component({
  selector: 'app-mes-activites',
  templateUrl: './mes-activites.component.html',
  styleUrls: ['./mes-activites.component.css'],
  providers: [AnnonceServiceService]
})
export class MesActivitesComponent implements OnInit {
  mesAnnoncesValidees: Annonce [];
  mesAnnoncesSignalees: Annonce [];
  mesAnnoncesInvalidees: Annonce [];
  mesAnnoncesDepubliees: Annonce [];

  mesRolesAttribues: UserModel [];

  constructor(private annonceService: AnnonceServiceService) { }

  ngOnInit() {
    this.annonceService.getMesAnnonceValidees().subscribe(
      data => console.log(this.mesAnnoncesValidees = JSON.parse(JSON.parse(JSON.stringify(data))._body)),
      error => console.log(error)
    );

    this.annonceService.getMesAnnoncesInvalidees().subscribe(
      data => console.log(this.mesAnnoncesInvalidees = JSON.parse(JSON.parse(JSON.stringify(data))._body)),
      error => console.log(error)
    );

    this.annonceService.getMesAnnoncesSignalees().subscribe(
      data => console.log(this.mesAnnoncesSignalees = JSON.parse(JSON.parse(JSON.stringify(data))._body)),
      error => console.log(error)
    );

    this.annonceService.getMesAnnoncesDepubliees().subscribe(
      data => console.log(this.mesAnnoncesDepubliees = JSON.parse(JSON.parse(JSON.stringify(data))._body)),
      error => console.log(error)
    );
  }

}
