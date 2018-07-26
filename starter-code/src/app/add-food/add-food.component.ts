import { Component, OnInit } from '@angular/core';
import { FoodService } from "../services/food.service";

@Component({
  selector: 'app-add-food',
  templateUrl: './add-food.component.html',
  styleUrls: ['./add-food.component.css']
})
export class AddFoodComponent implements OnInit {

  newFoodItem: any = {};

  constructor(public theService:FoodService) { }


  addNewFood() {
    this.theService.serviceFoodList.unshift(this.newFoodItem);
    this.newFoodItem = {};
    // this.toggleForm();
  }


  ngOnInit() {
  }

}
