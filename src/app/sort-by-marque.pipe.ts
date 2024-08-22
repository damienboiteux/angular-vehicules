import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortByMarque',
  standalone: true
})
export class SortByMarquePipe implements PipeTransform {

  transform(vehicules: any[], sortOrder: string): any[] {
    if (sortOrder === 'asc') {
      return vehicules.sort((a, b) => { return a.marque.localeCompare(b.marque); });
    } else {
      return vehicules.sort((a, b) => { return b.marque.localeCompare(a.marque); });
    }
  }

}
