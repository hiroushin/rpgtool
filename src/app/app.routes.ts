import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/npc', pathMatch: 'full' },
  {
    path: 'dice',
    loadComponent: () => import('./dice/dice.component').then(m => m.DiceComponent)
  },
  {
    path: 'npc',
    loadComponent: () => import('./npc/npc.component').then(m => m.NpcComponent)
  }
];
