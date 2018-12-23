import { Params } from '@angular/router';

export interface RouteParts {
    params?: Params;
    title: string;
    breadcrumb: string;
    url: string;
    urlSegments: any[];
    description: string;
}
