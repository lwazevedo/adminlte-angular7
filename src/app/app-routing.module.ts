import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'home', loadChildren: './pages/home/home.module#HomeModule'
  },
  {
    path: 'dashboard', loadChildren: './pages/dashboard/dashboard.module#DashboardModule'
  },
  {
    path: 'films', loadChildren: './pages/films/films.module#FilmsModule'
  },
  {
    path: 'people', loadChildren: './pages/people/people.module#PeopleModule'
  },
  {
    path: 'planets', loadChildren: './pages/planets/planets.module#PlanetsModule'
  },
  {
    path: 'species', loadChildren: './pages/species/species.module#SpeciesModule'
  },
  {
    path: 'starships', loadChildren: './pages/starships/starships.module#StarshipsModule'
  },
  {
    path: 'vehicles', loadChildren: './pages/vehicles/vehicles.module#VehiclesModule'
  },
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
