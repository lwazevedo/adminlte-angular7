import { Injectable } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd, ActivatedRouteSnapshot, Params, PRIMARY_OUTLET } from '@angular/router';
import { RouteParts } from './route-parts.metadata';

@Injectable()
export class RoutePartsService {
    public routeParts: RouteParts[];


    constructor(private router: Router) { }

    generateRouteParts(snapshot: ActivatedRouteSnapshot): RouteParts[] {
        this.routeParts = <RouteParts[]>[];
        if (snapshot) {
            if (snapshot.url) {
                this.routeParts = this.routeParts.concat(this.generateRouteParts(snapshot.firstChild));
            }
            if (snapshot.url.length) {
                this.routeParts.push({
                    title: snapshot.data['title'],
                    breadcrumb: snapshot.data['breadcrumb'],
                    description: snapshot.data['description'],
                    url: snapshot.url[0].path,
                    urlSegments: snapshot.url,
                    params: snapshot.params
                });
            }
        }
        return this.routeParts;
    }
}
