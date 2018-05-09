import { Component, OnInit, Input } from '@angular/core';
import { Annonce } from '../../models/annonce.model';

@Component({
  selector: 'app-annonce-item',
  templateUrl: './annonce-item.component.html',
  styleUrls: ['./annonce-item.component.css']
})
export class AnnonceItemComponent implements OnInit {
  @Input() annonce: Annonce;
  @Input() index: number;
  constructor() { }

  ngOnInit() {
  }

}
