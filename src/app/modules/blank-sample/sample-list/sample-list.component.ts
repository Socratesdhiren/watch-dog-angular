import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample-list',
  templateUrl: './sample-list.component.html',
  styleUrls: ['./sample-list.component.scss']
})
export class SampleListComponent implements OnInit {
  users: any;
  SelectedValue: any;
  msgs: any;
  constructor() { }

  ngOnInit() {
  }

}
