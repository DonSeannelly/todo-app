import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


export const router: Routes = [
    // ADD ROUTES TO COMPONENTS HERE
    { path: '**', redirectTo: '' },
];




export const routes: ModuleWithProviders = RouterModule.forRoot(router);