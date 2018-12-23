import { Component, OnInit, Input } from '@angular/core';

import { MENUS } from './tree-view-itens';
import { TreeViewInfo } from './tree-view.metadata';

@Component({
  selector: 'app-tree-view-menu',
  templateUrl: './tree-view.component.html'
})

export class TreeViewComponent implements OnInit {

  public links: Array<TreeViewInfo> = [];

  constructor() { }

  ngOnInit() {
    this.getmlinks();
  }

  getmlinks() {
    this.links = MENUS.filter(itens => itens);
  }

}
