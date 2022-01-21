import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  public wishItemList:any=[];
  public productList=new BehaviorSubject<any>([]);
  constructor() { }

  getProducts(){
    return this.productList.asObservable();
  }

  setProduct(product:any){
    this.wishItemList.push(...product);
    this.productList.next(product);
  }

  addToWish(product:any){
    this.wishItemList.push(product);
    this.productList.next(this.wishItemList);
    this.getTotalPrice();
    console.log(" in service "+this.wishItemList);
  }

  getTotalPrice():number{
    let grandTotal=0;
    this.wishItemList.map((a:any)=>{
      grandTotal+=a.total;
    })
    return grandTotal;
  }

  removeWishItem(product:any)
  {
    this.wishItemList.map((a:any,index:any)=>{
      if(product.id===a.id){
        this.wishItemList.splice(index,1);
      }
    })
    this.productList.next(this.wishItemList);
  }

  removeAllWish(){
    this.wishItemList=[];
    this.productList.next(this.wishItemList);
    
  }
}
