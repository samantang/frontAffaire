import { Component, OnInit, Input } from '@angular/core';
import { Annonce } from '../../models/annonce.model';

@Component({
  selector: 'app-mes-annonces-items',
  templateUrl: './mes-annonces-items.component.html',
  styleUrls: ['./mes-annonces-items.component.css']
})
export class MesAnnoncesItemsComponent implements OnInit {
  @Input() annonce: Annonce;
  @Input() index: number;
  constructor() { }

  ngOnInit() {
  }

}
