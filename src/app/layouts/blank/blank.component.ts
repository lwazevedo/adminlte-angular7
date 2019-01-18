import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blank',
  templateUrl: './blank.component.html',
  styleUrls: ['./blank.component.css']
})
export class BlankComponent implements OnInit {
  isLoged: boolean;
  constructor() {
    this.isLoged = false;
  }

  ngOnInit() {
  }

}
