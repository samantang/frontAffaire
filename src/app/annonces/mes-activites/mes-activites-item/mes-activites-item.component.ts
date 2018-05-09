import { Component, OnInit, Input } from '@angular/core';
import { Annonce } from '../../models/annonce.model';

import { Router } from '@angular/router';

@Component({
  selector: 'app-mes-activites-item',
  templateUrl: './mes-activites-item.component.html',
  styleUrls: ['./mes-activites-item.component.css']
})
export class MesActivitesItemComponent implements OnInit {
  @Input() annonceValidee: Annonce;
  @Input() indexValidee: number;

  @Input() annonceInvalidee: Annonce;
  @Input() indexInvalidee: number;

  @Input() annonceSignalee: Annonce;
  @Input() indexSignalee: number;

  @Input() annonceDepubliee: Annonce;
  @Input() indexDepubliee: number;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onVoirDetailsAnnonce() {
    console.log('lid de annonce..... ' + this.indexValidee);
    this.router.navigate(['/annonce-details-page/' + this.indexValidee + '']);
  }

}
