import { Component, OnInit, Output, EventEmitter ,ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'pm-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class NavbarComponent implements OnInit {
  @Output() getIndex: EventEmitter<number> = new EventEmitter();

  constructor() {}

  changeMenuTo(menuNo: number) {
    this.getIndex.emit(menuNo);
  }

  ngOnInit(): void {}
}
