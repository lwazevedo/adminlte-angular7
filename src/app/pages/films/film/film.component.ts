import { Component, OnInit } from '@angular/core';
import { BreadcrumbHead } from './breadcrumb.metadata';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {

  breadcrumbhead: Array<BreadcrumbHead> = [];
  constructor() { this.mountsBreadcrumbHead() }

  ngOnInit() {
  }

  mountsBreadcrumbHead() {
    this.breadcrumbhead = [
      {title: 'Data Identification', icon: 'home'},
      {title: 'Contact', icon: 'user'},
      {title: 'Address', icon: 'home'},
      {title: 'Other information', icon: 'info'},
      {title: 'Additional Information', icon: 'file-text-o'},
      {title: 'Contact History', icon: 'history'},
      {title: 'Bank Data', icon: 'bank'}
    ]
  }

}
