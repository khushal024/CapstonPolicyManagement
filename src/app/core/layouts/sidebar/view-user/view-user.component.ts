import { Component, OnInit ,ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'pm-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ViewUserComponent implements OnInit {
  searchbyselected: string = 'Name or Email';

  searchOptions: { value: string; alreadyChecked: Boolean }[] = [
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
  selectedRadio(val: {value : string}) {
    const changedSearchBy = val;

    this.searchbyselected = changedSearchBy.value ;

    console.log(this.searchbyselected);
  }
  constructor() {}

  ngOnInit(): void {}
}
