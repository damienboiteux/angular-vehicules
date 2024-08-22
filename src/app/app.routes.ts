import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VehiculesComponent } from './vehicules/vehicules.component';
import { VehiculeComponent } from './vehicule/vehicule.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'vehicules', component: VehiculesComponent },
    { path: 'vehicules/:id', component: VehiculeComponent },
    { path: '**', component: NotFoundComponent }
];
