import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListViewComponent } from './list-view/list-view.component';


export const router: Routes = [
    // ADD ROUTES TO COMPONENTS HERE
    { path: 'listview/:id', component: ListViewComponent },
    { path: '**', redirectTo: '' }
];




export const routes: ModuleWithProviders = RouterModule.forRoot(router);
