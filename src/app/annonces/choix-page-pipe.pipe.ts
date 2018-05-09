import { Pipe, PipeTransform } from '@angular/core';
import { Annonce } from './models/annonce.model';

@Pipe({
  name: 'choixPagePipe'
})
export class ChoixPagePipePipe implements PipeTransform {

  transform(toutesAnnonces: Annonce [], page: number) {
    return toutesAnnonces.filter(annonce => annonce.id > page && annonce.id > page + 8);
  }

}
