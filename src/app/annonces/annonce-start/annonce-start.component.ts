import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AnnonceServiceService } from '../annonce-service.service';
// import './annonce-start.js';
declare var $: any;

@Component({
  selector: 'app-annonce-start',
  templateUrl: './annonce-start.component.html',
  styleUrls: ['./annonce-start.component.css']
})
export class AnnonceStartComponent implements OnInit {
  @Output() rechercheRegion: EventEmitter<string> = new EventEmitter();

  constructor(private annonceService: AnnonceServiceService) { }

  ngOnInit() {
    var map = $('#map');
    var paths = $('#map .map__image a');
    var links = $('#map .map__list a');

    $('#map .map__image a').on('mouseenter', function(){
      var id_coupe = this.id.replace('region-', '');
      activeArea(id_coupe);
    });

    $('#map .map__list a').on('mouseenter', function(){
      var id_coupe = this.id.replace('list-', '');
      activeArea(id_coupe);
    });
  
    var activeArea = function(id) {
      $('#map .map__image a').removeClass('is-active');
      $('#map .map__list a').removeClass('is-active');
      $('#list-' + id).addClass('is-active');
      $('#region-' + id).addClass('is-active');
    }

    $('#map .map__image a').on('mouseleave', function(){
      $('#map .map__image a').removeClass('is-active');
      $('#map .map__list a').removeClass('is-active');
    });

    $('#map .map__list a').on('mouseleave', function(){
      $('#map .map__image a').removeClass('is-active');
      $('#map .map__list a').removeClass('is-active');
    });
  }

  chercherRegion(region: string) {
    this.rechercheRegion.emit(region);

  }
}