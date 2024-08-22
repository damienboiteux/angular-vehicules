import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VehiculesService {
  vehicules = [
    { id: 1 ,marque: 'Renault', modele: 'Clio', couleur: 'rouge', prix: 15000 },
    { id: 2 ,marque: 'Peugeot', modele: '208', couleur: 'bleue', prix: 18000 },
    { id: 3 ,marque: 'Citroën', modele: 'C3', couleur: 'grise', prix: 16000 },
    { id: 4 ,marque: 'Volkswagen', modele: 'Polo', couleur: 'blanche', prix: 17000 },
    { id: 5 ,marque: 'Ford', modele: 'Fiesta', couleur: 'noire', prix: 14000 },
    { id: 6 ,marque: 'Opel', modele: 'Corsa', couleur: 'jaune', prix: 13000 },
    { id: 7 ,marque: 'Fiat', modele: 'Punto', couleur: 'verte', prix: 12000 },
    { id: 8 ,marque: 'Toyota', modele: 'Yaris', couleur: 'orange', prix: 11000 },
    { id: 9 ,marque: 'Nissan', modele: 'Micra', couleur: 'violette', prix: 10000 },
    { id: 10 ,marque: 'Suzuki', modele: 'Swift', couleur: 'marron', prix: 9000 },
    { id: 11 ,marque: 'Hyundai', modele: 'i20', couleur: 'beige', prix: 8000 },
  ];

  constructor() { }
}
