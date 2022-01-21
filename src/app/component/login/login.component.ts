import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import {AuthenticationService } from 'authentication.service'
import { AuthenticationService } from 'src/app/service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userProfileForm=new FormGroup({
    username:new FormControl('', Validators.required),
    password:new FormControl('',Validators.required),
   
  });

  // constructor(private router: Router) { }

  constructor(private _auth: AuthenticationService, private _router: Router) {  
    if (this._auth.loggedIn) {  
      this._router.navigate(['Dashboard']);  
    }
  }

    

  ngOnInit(): void {
  }

//   onSubmit():void {

//     //retrieving from loginpage
// //  const username = this.userProfileForm.get('username').value;
// //  const password = this.userProfileForm.get('password').value;


//   localStorage.setItem("Logname",this.userProfileForm.value.username);
//    localStorage.setItem("Logword",this.userProfileForm.value.password);


//    var Logname=localStorage.getItem('Logname');
//  var Logword=localStorage.getItem('Logword')
//  //retrieve from localstorage
//  var Regname=localStorage.getItem('Regname');
//  var Regword=localStorage.getItem('Regword')


//   console.log("reg name is "+Regname)
//   console.log("name entered is "+Logname)

//   if(Regname==Logname && Regword==Logword){
//     // this.router.navigate(['/Dashboard' , username, password]);
//     this.router.navigate(['/Dashboard']);

//   }else{
//     // this.router.navigate(['/Error',"username" +username +" and password " +password +"do not exist"]);
//         this.router.navigate(['/Error']);
//         alert("name is "+Regname+" "+Logname+" "+"password "+Regword+" "+Logword)

//   }

 

//   }



onSubmit(): void {  
 
    if (this._auth.login(this.userProfileForm.value.username, this.userProfileForm.value.password)) {  
      this._router.navigate(['/products']);  
    }  
    else  
    { 
        alert("Wrong username or password");  
        this._router.navigate(['/register']);  
    }

}

}
