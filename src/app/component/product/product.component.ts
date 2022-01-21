import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../service/api.service'
import {CartService} from '../../service/cart.service'
import{WishlistService} from '../../service/wishlist.service'
import { Router } from '@angular/router';
// import {AuthenticationService } from 'authentication.service'
import { AuthenticationService } from 'src/app/service/authentication.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private api:ApiService, private cartService:CartService, private wishList:WishlistService, private router: Router,
    private authenticationService: AuthenticationService,private auth:AuthenticationService) { 
      if(this.auth.loggedIn){
        this.router.navigate(['/products'])
      
      }
      else{
        this.router.navigate(['/register'])
      }
    }
  public productList:any;


  class:String="far fa-heart";
  classh:String="fas fa-heart";
  
  // class:String="";
  // classh:String="";
  first:any;
  k:Boolean=false;




  ngOnInit(): void {

    this.first= localStorage.getItem('regusername');


    this.api.getProduct()
    .subscribe(res=>{
      this.productList=res;

      this.productList.forEach((a:any)=>{
        Object.assign(a,{quantity:1,total:a.price});
      });
    })
  }

  

  addToCart(item:any){
    this.cartService.addToCart(item);
    console.log("cart item is "+JSON.stringify(item))
    console.log("Id of item is "+item.id);
    // console.log(`Id of item is ${item.id}`);


  }

  addToWish(item:any)
  {
    console.log(item);
    this.wishList.addToWish(item);
    console.log("wish list item is "+JSON.stringify(item));
    console.log("wish list item id is "+JSON.stringify(item.id));

    // console.log("wishlist")
    // this.k=!this.k;
    // if(this.k==true){
    //   this.class="far fa-heart";
    //   this.wishList.addToWish(item);
    //   console.log("wish list item is "+JSON.stringify(item));
    // }
    // if(this.k==false)
    // {
    //   this.classh="fas fa-heart";
    //   console.log("wish list item removed is "+JSON.stringify(item));
    //   this.wishList.removeWishItem(item);
    //   // console.log("item after removal is "+JSON.stringify(item))
    // }


  }

  logout() {  
      
    this.authenticationService.logout();  
    this.router.navigate(['/login']);  
  }

}
