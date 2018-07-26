import { Component, OnInit, Input } from '@angular/core';
import { CategoryTypes } from 'app/common/category-type';

@Component({
  selector: 'category-block',
  templateUrl: './category-block.component.html',
  styleUrls: ['./category-block.component.css']
})
export class CategoryBlockComponent implements OnInit {

  @Input() categoryType: CategoryTypes;
  public imageCategoryPath: string;


  constructor() {  }
  ngOnInit() {
    this.imageCategoryPath = '/assets/data/dash_images/' + this.categoryType + '.jpg';
  }
}
