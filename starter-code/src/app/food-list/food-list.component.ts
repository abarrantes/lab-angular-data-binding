import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FoodService } from "../services/food.service";

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foodList: Array<any>;
  foodItem: any = {};
  searchValue: string = ""
  
  
  formShowing: boolean = false;
  
  todaysFoods: Array<any> = [];
  
  addedQuantity: number = 1;
  calories:number = 0;
  
  constructor(public myService:FoodService) { }

  searchFoodItem() {
    console.log(this.searchValue);
    this.foodList = this.myService.serviceFoodList.filter((oneFood)=>{
      return oneFood.name.toLowerCase().match(this.searchValue.toLowerCase());
    })
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


  ngOnInit() {
    // this.foodList = foods;
    this.foodList = this.myService.serviceFoodList;
  }


}
