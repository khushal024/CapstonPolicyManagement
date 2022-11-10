import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'pm-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SidebarComponent implements OnInit {

  showFiller = true;
  arrow_back_ios: String = '';
  index: number = 1;
  toggleSLider(drawer: any) {
    drawer.toggle();
    this.arrow_back_ios = "arrow_back_ios"
  }

  constructor() { }

  ngOnInit(): void { }
}
