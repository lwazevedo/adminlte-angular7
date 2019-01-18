import { Injectable, Injector } from '@angular/core';

import { Observable } from 'rxjs';
import { flatMap, catchError, map } from 'rxjs/operators';



import { Site } from './site.model';
import { BaseResourceService } from '../../../shared/base-resource.service';


@Injectable({
  providedIn: 'root'
})
export class SiteService extends BaseResourceService<Site> {

  constructor(protected injector: Injector) {
    super('https://swapi.co/api/films/', injector);
    console.log('site');
  }
}
