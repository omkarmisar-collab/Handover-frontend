import { Routes } from '@angular/router';
import { SourcingListComponent } from './components/sourcing-list.component';
import { MasterRoleComponent } from './master-role/master-role.component';


export const routes: Routes = [
    { path: '', component: SourcingListComponent }, // This makes it your home page
    { path: 'sourcing', component: SourcingListComponent },

    { path: 'master-role', component: MasterRoleComponent }

];