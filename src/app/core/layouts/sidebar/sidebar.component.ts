import { Component, OnInit, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'pm-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SidebarComponent implements OnInit {

  index: number = 0;

  menuIndex(data: number) {
    this.index = data;
  }

  constructor() {}

  ngOnInit(): void {}
}
