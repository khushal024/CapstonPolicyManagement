import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ViewEncapsulation,
  Input,
} from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'pm-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class NavbarComponent implements OnInit {
  @Output() getIndex: EventEmitter<number> = new EventEmitter();
  @Input() sideDrawer!: MatDrawer;
  constructor() {}
  toggleSidebar() { 
    this.sideDrawer.toggle();
  }
  changeMenuTo(menuNo: number) {
    this.getIndex.emit(menuNo);
    if (!this.sideDrawer.opened) {
      this.sideDrawer.toggle();
    }
  }
  logout() {
    window.location.reload();
  } 
  ngOnInit(): void {}
}
