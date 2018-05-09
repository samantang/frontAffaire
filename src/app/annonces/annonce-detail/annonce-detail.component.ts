import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';


import { AnnonceServiceService } from '../annonce-service.service';
import { AnnonceDetailModel } from '../models/annonce-details.model';

@Component({
  selector: 'app-annonce-detail',
  templateUrl: './annonce-detail.component.html',
  styleUrls: ['./annonce-detail.component.css'],
  providers: [AnnonceServiceService]
})
export class AnnonceDetailComponent implements OnInit {
  id: number;
  annonce: AnnonceDetailModel;
  private subscription: Subscription;
  tri: string;

  constructor(private annonceService: AnnonceServiceService,
              private route: ActivatedRoute,
              private router: Router) {
   }
 
  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.annonceService.getAnnonceApi(this.id).subscribe(
            data => console.log(this.annonce = JSON.parse(JSON.parse(JSON.stringify(data))._body) ),
            error => console.log(error)
          );
        }
      );
  }

  onAnnonceDetails() {
    this.router.navigate(['/annonce-details-page/' + this.id + '']);
  }
  onSignalerAnnonce() {
    this.router.navigate(['/signaler-annonce/' + this.id + '']);
  }
  onSauvegarderAnnonce() {
    this.annonceService.sauvegardeAnnonce(this.id);
  }
  onEcrireMessage() {
    this.router.navigate(['/send-message/' + this.id + '']);
  }
}
