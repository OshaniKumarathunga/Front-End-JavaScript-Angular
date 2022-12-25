import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';
import { Params } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { switchMap } from 'rxjs/operators';

import { DishService } from '../services/dish.service';


@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})

export class DishdetailComponent implements OnInit {

 
  dish!: Dish;
  dishIDs!: String[];
  prev!:String;
  next!: String;

  constructor(
    private dishservice : DishService , 
    private route : ActivatedRoute,
    private location : Location) { }


  ngOnInit(): void {
  this.dishservice.getDishIds()
      .subscribe(dishIDs => this.dishIDs = dishIDs);
  this.route.params
      .pipe(switchMap((params: Params) => this.dishservice.getDish(params['id'])))
      .subscribe(dish => { this.dish  = dish; this.setPrevNext(dish.id!); }); }

  setPrevNext(dishId : String){
    const index = this.dishIDs.indexOf(dishId);
    this.prev  = this.dishIDs[(this.dishIDs.length + index -1) % this.dishIDs.length];
    this.next  = this.dishIDs[(this.dishIDs.length + index +1) % this.dishIDs.length];
    
  }

  goBack () : void {
    this.location.back();
  }

}
