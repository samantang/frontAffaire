import { Pipe, PipeTransform } from '@angular/core';
import { Annonce } from './models/annonce.model';

@Pipe({
  name: 'choixTypePipe'
})
export class ChoixTypePipePipe implements PipeTransform {

  transform(toutesAnnonces: Annonce[], type: any) {
    return toutesAnnonces.filter(anon => anon.typeAnnonce === type);
  }


}
