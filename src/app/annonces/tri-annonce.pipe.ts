import { Pipe, PipeTransform } from '@angular/core';
import { Annonce } from './models/annonce.model';
import { filter } from 'rxjs/operator/filter';

@Pipe({
  name: 'triAnnonce'
})
export class TriAnnoncePipe implements PipeTransform {

  transform(toutesAnnonces: Annonce [], tri: any) {
    if ( tri === 'date' ) {
      // return toutesAnnonces.filter(annonce => annonce.dateDepot.indexOf(filter.toString.name) !== -1);
      return toutesAnnonces.filter(annonce => annonce.prix > 0);
    }
    if ( tri === 'prix' ) {
      toutesAnnonces.sort((a: any, b: any) => {
        if (a[tri] < b[tri]) {
          return -1;
        } else if (a[tri] > b[tri]) {
          return 1;
        } else {
          return 0;
        }
      });
      return toutesAnnonces;
    }
    return toutesAnnonces.filter(annonce => annonce.prix > 0);
  }

}
