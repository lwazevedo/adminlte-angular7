import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashComponent } from './dash/dash.component';

const routes: Routes = [
    {
        path: '', component: DashComponent, data: {
            title: 'Dashboard',
            description: 'V.1.0.0',
            urls: [
                { title: 'Home', url: '/dashboard', icon: 'dashboard' },
                { title: 'Dashboard' }
            ]
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule { }
