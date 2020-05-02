import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ygm-pull-out-menu',
  templateUrl: './pull-out-menu.component.html',
  styleUrls: ['./pull-out-menu.component.css']
})
export class PullOutMenuComponent implements OnInit {

  status: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu(){
      this.status = !this.status;
  }
}
