import { Component, OnInit } from '@angular/core';
import { WishlistService } from 'src/app/service/wishlist.service';
import { CartService } from 'src/app/service/cart.service';



@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent implements OnInit {

  public product:any=[];
  public grandTotal! :number;
  constructor(private wishListService:WishlistService,private cartService:CartService) { }

  ngOnInit(): void {

    this.wishListService.getProducts()
    .subscribe(res=>{
      this.product=res;
      this.grandTotal=this.wishListService.getTotalPrice();
    })
    console.log("wish list in console "+JSON.stringify(this.product));
    
    // var names = this.product.map(function(i) {
    //   return i.name;
    // });

    var names=this.product;

    for(var i=0;i<names.length;i++)
    {
      console.log("length of wishList is "+names.length);
      console.log("array of values " +JSON.stringify(names[i].id));
    }

    console.log("wish list item ID in console "+JSON.stringify(this.product.id));
    
  }

  removeItem(item:any)
  {
    this.wishListService.removeWishItem(item);
  }

  emptyWish()
  {
    this.wishListService.removeAllWish();
  }

  addToCart(item:any)
  {
    this.cartService.addToCart(item);
    this.wishListService.removeWishItem(item);
    console.log("Removed and added to cart");

  }

}
