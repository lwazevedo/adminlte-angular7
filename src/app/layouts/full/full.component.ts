import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-full',
  templateUrl: './full.component.html',
  styleUrls: ['./full.component.css']
})
export class FullComponent implements OnInit {
  isLoged: boolean;
  constructor() { this.isLoged = Boolean(localStorage.getItem('isLoggedin')); }

  ngOnInit() {
  }

}
