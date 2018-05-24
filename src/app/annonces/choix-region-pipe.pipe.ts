import { Pipe, PipeTransform } from '@angular/core';
import { Annonce } from './models/annonce.model';

@Pipe({
  name: 'choixRegionPipe'
})
export class ChoixRegionPipePipe implements PipeTransform {

  transform(toutesAnnonces: Annonce[], type: any) {
    return toutesAnnonces.filter(anon => anon.region === type);
  }

}
