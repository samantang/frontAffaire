import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AnnonceServiceService } from '../annonce-service.service';
import { Annonce } from '../models/annonce.model';

@Component({
  selector: 'app-mes-annonces',
  templateUrl: './mes-annonces.component.html',
  styleUrls: ['./mes-annonces.component.css'],
  providers: [AnnonceServiceService]
})
export class MesAnnoncesComponent implements OnInit {
  annonces: Annonce [];
  usernameLogged = localStorage.getItem('username');
  constructor(private annonceService: AnnonceServiceService, private router: Router) { }

  ngOnInit() {
    this.annonceService.getMesAnnonces().subscribe(
      data => console.log(this.annonces = JSON.parse(JSON.parse(JSON.stringify(data))._body)),
      error => console.log(error)
    );
  }
  onConnect () {
    this.router.navigate(['/login']);
  }

}
