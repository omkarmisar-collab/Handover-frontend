import { Routes } from '@angular/router';
import { SourcingListComponent } from './components/sourcing-list.component';

export const routes: Routes = [
    { path: '', component: SourcingListComponent }, // This makes it your home page
    { path: 'sourcing', component: SourcingListComponent }
];