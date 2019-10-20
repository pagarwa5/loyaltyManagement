import { Component, OnInit } from '@angular/core';
import { sharedService } from '../../sharedService';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
 items;
 totalSum=0;
 clicked = "";
  constructor(private sharedService:sharedService) { }

  ngOnInit() {
    this.items= this.sharedService.getSelectableItems();
  }
  sumAmount(item){
    this.totalSum =this.totalSum+item.amount;
    this.clicked = item.name;
    this.sharedService.setSum(this.totalSum);
  }
  getColor(item){
  
  return item.name ==this.clicked?'lightgrey':"";
  }
}
