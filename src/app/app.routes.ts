import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'shopfront',
    loadComponent: () => import('./shopfront/shopfront.page').then( m => m.ShopfrontPage)
  },
  {
    path: 'shop',
    loadComponent: () => import('./shop/shop.page').then( m => m.ShopPage)
  },
];
