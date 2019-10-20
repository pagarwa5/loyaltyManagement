import { Component, OnInit } from '@angular/core';
import { sharedService } from '../sharedService';
import { Item } from './item.model';
import { LoyaltyService } from './loyalty.service';

@Component({
  selector: 'app-loyalty',
  templateUrl: './loyalty.component.html',
  styleUrls: ['./loyalty.component.css']
})
export class LoyaltyComponent implements OnInit {
  selectableItems;
  ruleCall = false;
  ruleExists=false;
  ruleError=false;
  validRule=false;
  loyaltyResponse=null;
  createRulecall = false;
  existingRuleRes:any;
  rule={selectedItem:"select item",
        pointValue:"",
        points:"",
        expiry:"",
        selectedBrand:"select brand"
      };

  data ;
  brands ;
  constructor(private sharedService :sharedService,private loyaltyService :LoyaltyService) { }

  ngOnInit() {
    this.selectableItems = this.sharedService.getSelectableItems();
   this.brands = this.sharedService.getBrands();
    console.log(this.selectableItems);
    console.log(this.brands);
  }

  reset(){
    this.ruleExists = false;
    this.ruleCall = false;
    this.loyaltyResponse = null;
    this.ruleError = false
  }
  getRule(){
    this.reset();
    if(this.rule.selectedItem=="select item"){
      this.ruleError = true;
    }else{
    this.loyaltyService.getRule(this.rule.selectedItem,this.sharedService.data.merchantId).subscribe(
      response => {
        this.ruleCall = true;
       if(response!=null){  
        this.validRule = true;    
       this.existingRuleRes = response;
       this.rule.pointValue=this.existingRuleRes[0].pointValue
       this.rule.points = this.existingRuleRes[0].points;
       this.rule.expiry = this.existingRuleRes[0].expiry; 
       this.rule.selectedBrand = this.existingRuleRes[0].brandName; 
       }
      }
    );
  }
  }

  createRule(){
    this.reset();
    this.createRulecall = true;
    console.log(this.rule.selectedItem);
   if(this.rule.selectedItem=="select item"){
      this.ruleError = true;
    }else{
    this.loyaltyService.createRule(this.rule,this.sharedService.data.merchantId).subscribe(
      response => {
        if(response!=null){
       this.loyaltyResponse  =  response;
        }else{
          this.ruleExists = true;
         
        }

      }
    );
    }

  
   

  }

}
