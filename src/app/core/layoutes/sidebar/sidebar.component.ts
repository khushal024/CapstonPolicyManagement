import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pm-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  switch_expression = 'match_expression_2';
  showFiller = true;
  arrow_back_ios: String = ''; 

  toggleSLider(drawer: any) {
    drawer.toggle();
    this.arrow_back_ios = "arrow_back_ios"
  }
  showDrawer() {}
  constructor() {}
  visibility = 'hidden';
  changeMenu(menu: any): void {
    this.switch_expression = menu;
    console.log(menu);
    this.showFiller = !menu;
  }

  ngOnInit(): void {}
}
