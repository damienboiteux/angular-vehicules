import { Component } from '@angular/core';
import { VehiculesService } from '../vehicules.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SortByMarquePipe } from '../sort-by-marque.pipe';
import { FilterByModelePipe } from '../filter-by-modele.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-vehicules',
  standalone: true,
  imports: [CommonModule, RouterLink, SortByMarquePipe, FormsModule, FilterByModelePipe],
  templateUrl: './vehicules.component.html',
  styles: ``
})
export class VehiculesComponent {
  sortOrder: string = 'asc';
  searchTerm: string = '';
  vehicules: any[] = [];
  constructor(private vehiculesService: VehiculesService) {}
  ngOnInit() {
    this.vehicules = this.vehiculesService.vehicules;
  }

  setSortOrder(order: string) {
    this.sortOrder = order;
  }
  
}
