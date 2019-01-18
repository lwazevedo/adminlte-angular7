import { OnInit } from '@angular/core';

import { BaseResourceModel } from './base-resource.model';
import { BaseResourceService } from './base-resource.service';

export abstract class BaseResourceListComponent<T extends BaseResourceModel> implements OnInit {

  resources: T[] = [];

  constructor(private resourceService: BaseResourceService<T>) { }

  ngOnInit() {
    this.resourceService.getAll().subscribe(
      resources => console.log('x', resources),
      error => alert('Erro ao carregar a lista')
    );
  }
}
