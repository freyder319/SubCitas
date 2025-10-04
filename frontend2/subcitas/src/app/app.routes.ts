import { Routes } from '@angular/router';
import { Inicio } from './inicio/inicio';
import { Aura } from './aura/aura';

export const routes: Routes = [
    { path: '', component: Inicio },
    { path: 'Aura', component: Aura }
];
