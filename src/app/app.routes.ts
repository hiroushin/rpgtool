import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/dice', pathMatch: 'full' },
  {
    path: 'dice',
    loadComponent: () => import('./dice/dice.component').then(m => m.DiceComponent)
  },
  {
    path: 'npc',
    loadComponent: () => import('./npc/npc.component').then(m => m.NpcComponent)
  }
];
