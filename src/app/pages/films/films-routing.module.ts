import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilmComponent } from './film/film.component';



const routes: Routes = [
    {
        path: '', component: FilmComponent, data: {
            title: 'Films',
            description: 'V.1.0.0',
            urls: [
                { title: 'Home', url: '/home', icon: 'home' },
                { title: 'Registration' },
                { title: 'Films' }
            ]
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FilmsRoutingModule { }
