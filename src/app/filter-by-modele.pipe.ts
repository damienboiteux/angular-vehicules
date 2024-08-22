import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByModele',
  standalone: true
})
export class FilterByModelePipe implements PipeTransform {

  transform(vehicules: any[], searchTerm: string): any[] {
    console.log(searchTerm);
    if (!searchTerm) {
      return vehicules;
    }
    let response = vehicules.filter(vehicule => vehicule.modele.toLowerCase().includes(searchTerm.toLowerCase()));

    console.log(response);
    return response;
  }

}
