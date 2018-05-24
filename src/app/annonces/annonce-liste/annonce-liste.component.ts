import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { AnnonceServiceService } from '../annonce-service.service';
import { Annonce } from '../models/annonce.model';
// import { NgModel} from '@angular/forms';

@Component({
  selector: 'app-annonce-liste',
  templateUrl: './annonce-liste.component.html',
  styleUrls: ['./annonce-liste.component.css'],
  providers: [AnnonceServiceService]
})
export class AnnonceListeComponent implements OnInit, OnDestroy {
  @Input() typeChoisiPaticulier: string;
  @Input() typeChoisiProfessionnel: string;
  @Input() typeChoisiTous: string;
  @Input() tri: string;

  @Input() lesAnnoncesRecherche: Annonce [];

  regionChoisi: string;
  annonces: Annonce [];

  Particulier: string = 'Particulier';

  maxSize: number = 8;
  bigTotalItems: number;
  bigCurrentPage: number = 1;
  numPages: number = 0;

  nbTotalAannonce: number;

  Particulierro: string = 'Particulier';
  subscription: Subscription;

  constructor(private annonceService: AnnonceServiceService) {

  }

  ngOnInit() {
    this.annonceService.getNbAnnonces().subscribe(
      data => console.log(this.bigTotalItems = JSON.parse(JSON.parse(JSON.stringify(data))._body)),
      error => console.log(error)
    );

    this.annonceService.getAnnoncesApi().subscribe(
      data => console.log( this.annonces = JSON.parse(JSON.parse(JSON.stringify(data))._body)),
      error => console.log(error)
    );
    // this.annonceService.regionChoisi.subscribe(
    //   region => this.regionChoisi = region
    // );
  }

  pageChanged(event: any): void {
    console.log('Page changed to: ' + event.page);
    console.log('Number items per page: ' + event.itemsPerPage);
    this.changerPagination(event.page);

  }
  changerPagination (page: any) {
    this.annonceService.changerPagination(page).subscribe(
      data => console.log(this.annonces = JSON.parse(JSON.parse(JSON.stringify(data))._body)),
      error => console.log(error)
    );
  }
ngOnDestroy() {

}

// sendMessage(): void {
//   // send message to subscribers via observable subject
//   console.log('send the message .....');
//   this.annonceService.sendMessage('Message from Home Component to App Component!');

// }

// clearMessage(): void {
//   // clear message
//   this.annonceService.clearMessage();
// }
 
}
