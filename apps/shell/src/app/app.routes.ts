import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';
import { HomeComponent } from '@flight-demo/shared/core';
import { fullMatchFirstSegment, loadMultiVersionMfe } from '@flight-demo/shared/federation';


export const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'booking',
    loadChildren: () => import('@flight-demo/domain/booking')
  },
  {
    path: 'checkin',
    loadChildren: () => import('@flight-demo/domain/checkin')
  },
  {
    path: 'boarding',
    loadChildren: () => import('@flight-demo/domain/boarding')
  },
  {
    path: 'miles-single',
    loadChildren: () => loadRemoteModule('miles-single', './routes')
  },
  {
    matcher: fullMatchFirstSegment('miles-multi'),
    loadChildren: () => loadMultiVersionMfe(
      'miles-multi', './bootstrap', 'mfe-miles'
    )
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];
