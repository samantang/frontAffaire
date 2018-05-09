import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { AnnonceServiceService } from '../annonce-service.service';
import '../file.js';
import { Annonce } from '../models/annonce.model';

@Component({
  selector: 'app-annonce-detail-page',
  templateUrl: './annonce-detail-page.component.html',
  styleUrls: ['./annonce-detail-page.component.css'],
  providers: [AnnonceServiceService]
})
export class AnnonceDetailPageComponent implements OnInit {
  id: number;
  annonce: Annonce;

  constructor(private route: ActivatedRoute, private annonceService: AnnonceServiceService, private router: Router) {
  }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params: Params) => {
        this.id = params['id'];
        this.annonceService.getAnnonceApi(params['id']).subscribe(
          data => console.log(this.annonce = JSON.parse(JSON.parse(JSON.stringify(data))._body)),
          error => console.log(error)
        );
      }
    );
  }
  onSignalerAnnonce() {
    this.router.navigate(['/signaler-annonce/' + this.id + '']);
  }

}
