import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StarshipsComponent } from './starships/starships.component';


const routes: Routes = [
  {
    path: '', component: StarshipsComponent, data: {
      title: 'Starships',
      description: 'V.1.0.0',
      urls: [
        { title: 'Home', url: '/home', icon: 'home' },
        { title: 'Registration' },
        { title: 'Starships & Vehicles' },
        { title: 'Starships' }
      ]
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StarshipsRoutingModule { }
