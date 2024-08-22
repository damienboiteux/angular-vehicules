import { Component, inject } from '@angular/core';
import { VehiculesService } from '../vehicules.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vehicule',
  standalone: true,
  imports: [],
  template: `
    <h1>{{ vehicule.marque }} {{ vehicule.modele }} ({{ vehicule.id }})</h1>
    <p>Couleur : {{ vehicule.couleur }}</p>
    <p>Prix : {{ vehicule.prix }} €</p>
  `,
  styles: ``
})
export class VehiculeComponent {

  private route = inject(ActivatedRoute);

  vehicule: any;
  vehicules: any[] = [];

  constructor(private vehiculesService: VehiculesService) {}
  
  ngOnInit() {
    this.vehicules = this.vehiculesService.vehicules;
    this.route.params.subscribe(params => {
      this.vehicule = this.vehicules.find(vehicule => vehicule.id === +params['id']);
    });
  }
}
