import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';




const routes: Routes = [
    { path: '', component: HomeComponent, data: {
        title: 'Home',
        description: 'V.1.0.0',
        urls: [
            { title: 'Home', url: '/home', icon: 'home' },
            { title: 'Home' }
        ]
    } }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }
