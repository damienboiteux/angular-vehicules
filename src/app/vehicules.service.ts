import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VehiculesService {
  vehicules = [
    { marque: 'Renault', modele: 'Clio', couleur: 'rouge', prix: 15000 },
    { marque: 'Peugeot', modele: '208', couleur: 'bleue', prix: 18000 },
    { marque: 'Citroën', modele: 'C3', couleur: 'grise', prix: 16000 },
    { marque: 'Volkswagen', modele: 'Polo', couleur: 'blanche', prix: 17000 },
    { marque: 'Ford', modele: 'Fiesta', couleur: 'noire', prix: 14000 },
    { marque: 'Opel', modele: 'Corsa', couleur: 'jaune', prix: 13000 },
  ];
  constructor() { }
}
