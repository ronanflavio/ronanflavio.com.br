import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  public yearsOfExperience: number;

  ngOnInit(): void {
    this.yearsOfExperience = moment().diff('2013-08-01', 'years');
  }

}
