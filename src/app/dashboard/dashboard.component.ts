import { Component, OnInit } from '@angular/core';
import { CategoryTypes } from 'app/common/category-type';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public categoryType = CategoryTypes;
  constructor() { }

  ngOnInit() {
  }

}
