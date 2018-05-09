import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AnnonceServiceService } from '../annonce-service.service';
import { Annonce } from '../models/annonce.model';

@Component({
  selector: 'app-mes-favoris',
  templateUrl: './mes-favoris.component.html',
  styleUrls: ['./mes-favoris.component.css'],
  providers: [AnnonceServiceService],
})
export class MesFavorisComponent implements OnInit {
  favoris: Annonce [];
  usernameLogged = localStorage.getItem('username');

  constructor(private annonceService: AnnonceServiceService,
              private route: ActivatedRoute,
              private router: Router
  ) { }

  ngOnInit() {
    this.annonceService.mesFavoris()
        .subscribe(
          data => console.log(this.favoris = JSON.parse(JSON.parse(JSON.stringify(data))._body) ),
            error => console.log(error)
        );
  }
  consulterAnnonce(id: number) {
    this.router.navigate(['/annonce-details-page/' + id + '']);
  }
  deleteFavori (id: number) {
    this.annonceService.deleteFavori(id);
  }

  onConnect () {
    this.router.navigate(['/login']);
  }

}
