import { BaseResourceModel } from './base-resource.model';

import { Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

export class BaseResourceService<T extends BaseResourceModel> {

  protected http: HttpClient;

  constructor(
    protected apiPath: string,
    protected injector: Injector
  ) {
    this.http = injector.get(HttpClient);
    console.log(this.http);
  }

  getAll(): Observable<T[]> {
    return this.http.get(this.apiPath).pipe(
      map(data => <any> data),
      catchError(error => error)
    );
  }
}
