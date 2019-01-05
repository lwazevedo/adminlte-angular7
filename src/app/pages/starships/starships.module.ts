import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StarshipsRoutingModule } from './starships-routing.module';
import { StarshipsComponent } from './starships/starships.component';


@NgModule({
  declarations: [StarshipsComponent],
  imports: [
    CommonModule,
    StarshipsRoutingModule
  ]
})
export class StarshipsModule { }
