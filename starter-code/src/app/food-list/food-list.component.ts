import { Component, OnInit } from '@angular/core';
import foods from '../foods';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foodList: Array<any>;
  foodItem: any = {};
  searchValue: string = ""

  newFoodItem: any = {};
  formShowing: boolean = false;

  todaysFoods: Array<any> = [];
  
  addedQuantity: number = 1;
  calories:number = 0;

  searchFoodItem() {
    console.log(this.searchValue);
    this.foodList = foods.filter((oneFood)=>{
      return oneFood.name.toLowerCase().match(this.searchValue.toLowerCase());
    })
  }

  addNewFood() {
    console.log("button works");
    this.foodList.unshift(this.newFoodItem);
    this.newFoodItem = {};
    this.toggleForm();
  }

  toggleForm(){
    console.log("hi");
    this.formShowing = !this.formShowing;
  }

  addToTodaysFoods(foodItem) {
    foodItem.quantity = this.addedQuantity;
    this.calories += foodItem.calories;
    this.todaysFoods.push(foodItem);
    this.addedQuantity = 1;
  }

  calorieCount(){

  }

  constructor() { }

  ngOnInit() {
    this.foodList = foods;
  }


}
