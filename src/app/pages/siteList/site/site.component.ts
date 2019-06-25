import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Site } from '../shared/site.model';
import { SiteService } from './../shared/site.service';
import { BaseResourceListComponent } from '../../../shared/base-resource-list.component';
import { forkJoin, Observable, of, from } from 'rxjs';
import { concatAll, mergeMap, map, flatMap, switchMap } from 'rxjs/operators';



@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.css']
})
export class SiteComponent extends BaseResourceListComponent<Site> implements OnInit {
  URL: string;

  constructor(private siteService: SiteService, private http: HttpClient) {
    super(siteService);
  }

  ngOnInit() {
    this.http.get('https://swapi.co/api/films').subscribe((x: any) => {
      console.log(x);
      const species = x.results.map(xc => xc.species);
      console.log(species);
      // forkJoin(x.results.films, x.results.species).subscribe(z => {
      //   console.log(z);
      // }
      // );
    });
  }
}

