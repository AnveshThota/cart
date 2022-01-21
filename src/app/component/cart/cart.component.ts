import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { WishlistService } from 'src/app/service/wishlist.service';



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public product:any=[];
  public grandTotal! :number;
  constructor(private cartService:CartService,private wishListService:WishlistService) { }

  ngOnInit(): void {

    this.cartService.getProducts()
    .subscribe(res=>{
      this.product=res;
      this.grandTotal=this.cartService.getTotalPrice();
    })
    
    console.log("cart list in console "+JSON.stringify(this.product));
  }

  removeItem(item:any)
  {
    this.cartService.removeCartItem(item);
  }

  emptyCart()
  {
    this.cartService.removeAllCart();
  }

  addToWish(item:any)
  {
    this.wishListService.addToWish(item);
    // this.cartService.removeCartItem(item);
    console.log(" added to wishList");

  }

}
