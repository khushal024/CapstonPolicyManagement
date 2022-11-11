import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pm-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss'],
})
export class ViewUserComponent implements OnInit {
  searchbyselected: any = 'Name or Email';

  searchOptions: { value: String; alreadyChecked: Boolean }[] = [
    {
      value: 'Name or email',
      alreadyChecked: true,
    },
    {
      value: 'Partner',
      alreadyChecked: false,
    },
    {
      value: 'Application and role',
      alreadyChecked: false,
    },
  ];
  searchAlert() {
    alert('Comming Soon...');
  }
  selectedRadio(val: any) {
    this.searchbyselected = val;
    console.log(this.searchbyselected);
  }
  constructor() {}

  ngOnInit(): void {}
}
