import {Injectable} from '@angular/core'
import { Item } from './loyalty/item.model';

@Injectable()
export class sharedService {
  items:Item[]=[];
  userDetails;
  brands;
  data={
    merchantId:0
  };
  totalSum;
  loyaltyData;
    constructor() {
     
      }

      getSelectableItems(){
       this.items = [
            new Item("select item","0",0,0,""),
            new Item("shirt","1",500,250,"https://static3.cilory.com/273124-thickbox_default/nologo-navy-casual-shirt.jpg")
            ,new Item("pant","2",1000,500,"https://images.thenorthface.com/is/image/TheNorthFace/NF0A2TCT_254_hero?$638x745$")
            ,new Item("jeans","3",1500,750,"http://runsickcattle.com/data/out/29/568721.jpg")
            ,new Item("skirt","4",500,250,"http://www.sandipointe.com/im/skirts/pleated-skirts-10.jpg")
            ,new Item("top","5",500,250,"https://www.hobbs.co.uk/images/products/0213-6346-3821L00-003/0213-6346-3821L00-003_01_1008_1080.jpg")
       ];
        return this.items;
    }

   setData(data){
     this.data.merchantId = data.merchantId;
   }
   getData(){
     return this.data;
   }

   getLoyaltyDetails(){
    this.loyaltyData ={
      userName:"padma",
      totalPoints:"1000",
      totalAmount:"", 
    }
    return this.loyaltyData;
   }

   setSum(sum){
     this.totalSum = sum;
   }

   setUserDetails(user){
    this.userDetails = user[0];
   }

   getBrands(){
     this.brands=["woodland","ranker","adidas","Hugo boss","levis"];
     return this.brands;
   }
  
    
} 