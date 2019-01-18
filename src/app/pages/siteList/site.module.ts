import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SiteRoutingModule } from './site-routing.module';
import { SiteComponent } from './site/site.component';
import { SharedModule } from '../../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [SiteComponent],
  imports: [
    SharedModule,
    SiteRoutingModule,
    HttpClientModule
  ]
})
export class SiteModule { }
