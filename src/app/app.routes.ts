import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeViewComponent } from './home-view/home-view.component';


export const router: Routes = [
    // ADD ROUTES TO COMPONENTS HERE
    { path: '', component: HomeViewComponent },
    { path: '**', redirectTo: '' },
];




export const routes: ModuleWithProviders = RouterModule.forRoot(router);