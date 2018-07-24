import { Component, OnInit } from '@angular/core';
import foodsList from '../foods';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foods: Array<any>;
  food: any = {};
  searchValue: string = ""
  todayFoods: Array<any> = [];
  addedQuantity: number = 1;
  calories:number = 0;

  searchFood() {
    console.log("button works");
    console.log(this.searchValue);
    let searchVal = this.searchValue;
    this.foods.forEach(function (element) {
      if (element.name === searchVal) { element.quantity = 1 }
    })
    console.log("done")
  }

  addFood() {
    console.log("button works");
    this.foods.push(this.food);
    this.food = {};
  }

  addToTodayFoods(food) {
    food.quantity = this.addedQuantity;
    this.calories += food.calories;
    this.todayFoods.push(food);
    this.addedQuantity = 1;
  }

  calorieCount(){

  }

  constructor() { }

  ngOnInit() {
    this.foods = foodsList;
  }


}
