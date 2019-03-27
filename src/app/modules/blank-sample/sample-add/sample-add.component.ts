import { Component, OnInit } from '@angular/core';
import {SelectItem} from "primeng/api";

@Component({
  selector: 'app-sample-add',
  templateUrl: './sample-add.component.html',
  styleUrls: ['./sample-add.component.scss']
})
export class SampleAddComponent implements OnInit {
  date: string;
  cities: SelectItem[];
  options: SelectItem[];
  selectedOption: string;

  constructor() {
     this.cities = [];
        this.cities.push({label:'Select Cities', value:'Select Cities'});
        this.cities.push({label:'New York', value:'New York'});
        this.cities.push({label:'Rome', value:'Rome'});
        this.cities.push({label:'London', value:'London'});
        this.cities.push({label:'Istanbul', value:'Istanbul'});
        this.cities.push({label:'Paris', value:'Paris'});


         this.options = [];
        this.options.push({label:'Option 1', value:'Option 1'});
        this.options.push({label:'Option 2', value:'Option 2'});
        this.options.push({label:'Option 3', value:'Option 3'});
        this.options.push({label:'Option 4', value:'Option 4'});
        this.options.push({label:'Option 5', value:'Option 5'});

  }



  ngOnInit() {
  }



}
