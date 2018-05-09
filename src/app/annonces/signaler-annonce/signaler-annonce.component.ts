import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { AnnonceServiceService } from '../annonce-service.service';
import { Annonce } from '../models/annonce.model';
import { AnnonceSignalee } from '../models/user-annonce-signalee';

@Component({
  selector: 'app-signaler-annonce',
  templateUrl: './signaler-annonce.component.html',
  styleUrls: ['./signaler-annonce.component.css'],
  providers: [AnnonceServiceService]
})
export class SignalerAnnonceComponent implements OnInit {
  @ViewChild('f') singupForm: NgForm;
  id: number;
  annonce: Annonce;
  usernameLogged = localStorage.getItem('username');
  annonceSignalee: AnnonceSignalee;

  motifSignalement: string;
  messageSignalement: string;

  motifsSignalement = ['fraude', 'doublon', 'discrimination', 'animaux', 'mauvaise categorie', 'autre'];

  constructor(private route: ActivatedRoute, private annonceService: AnnonceServiceService,
              private router: Router) { }


  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id  = params['id'];
        }
      );
  }
  onSubmit(form: NgForm) {
    this.motifSignalement = this.singupForm.value.motifsignalement;
    this.messageSignalement = this.singupForm.value.messagesignalement;
    console.log('signalement message: ' + this.singupForm.value.messagesignalement);
    console.log('signalement motif: ' + this.singupForm.value.motifsignalement);

    this.annonceSignalee = new AnnonceSignalee(this.id, this.motifSignalement, this.messageSignalement);
    this.annonceService.signalerAnnonce(this.annonceSignalee);
  }
  onAnnuler() {
    this.router.navigate(['/annonces']);
  }
  onConnect () {
    this.router.navigate(['/login']);
  }
}
