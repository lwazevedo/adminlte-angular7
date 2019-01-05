import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlanetsRoutingModule } from './planets-routing.module';
import { PlanetsComponent } from './planets/planets.component';

@NgModule({
  declarations: [PlanetsComponent],
  imports: [
    CommonModule,
    PlanetsRoutingModule
  ]
})
export class PlanetsModule { }
