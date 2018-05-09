import { Component, OnInit } from '@angular/core';
import { AnnonceServiceService } from '../annonce-service.service';
import { Annonce } from '../models/annonce.model';

@Component({
  selector: 'app-annonces-sinalees',
  templateUrl: './annonces-sinalees.component.html',
  styleUrls: ['./annonces-sinalees.component.css'],
  providers: [AnnonceServiceService]
})
export class AnnoncesSinaleesComponent implements OnInit {

  annonces: Annonce [];
  constructor(private annonceService: AnnonceServiceService) { }

  ngOnInit() {
    this.annonceService.getAnnoncesSignalees().subscribe(
      data => console.log(this.annonces = JSON.parse(JSON.parse(JSON.stringify(data))._body)),
      error => console.log(error)
    );
  }

}
