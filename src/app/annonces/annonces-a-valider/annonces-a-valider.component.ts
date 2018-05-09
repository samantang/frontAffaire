import { Component, OnInit } from '@angular/core';
import { AnnonceServiceService } from '../annonce-service.service';
import { Annonce } from '../models/annonce.model';

@Component({
  selector: 'app-annonces-a-valider',
  templateUrl: './annonces-a-valider.component.html',
  styleUrls: ['./annonces-a-valider.component.css'],
  providers: [AnnonceServiceService]
})
export class AnnoncesAValiderComponent implements OnInit {

  annonces: Annonce [];
  constructor(private annonceService: AnnonceServiceService) { }

  ngOnInit() {
    this.annonceService.getAnnoncesAvalider().subscribe(
      data => console.log(this.annonces = JSON.parse(JSON.parse(JSON.stringify(data))._body)),
      error => console.log(error)
    );
  }

}
