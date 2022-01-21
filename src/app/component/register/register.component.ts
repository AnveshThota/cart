import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { REACTIVE_FORM_DIRECTIVES } from '@angular/forms'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthenticationService } from 'src/app/service/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  

  ngOnInit(): void {
  }

  
registerProfileForm=new FormGroup({
  firstname:new FormControl('', Validators.required),
  lastname:new FormControl( '',Validators.required),
  email:new FormControl( '',Validators.required),
  password:new FormControl( '',Validators.required),
  cpassword:new FormControl( '',Validators.required),
 
});

constructor(private _auth: AuthenticationService, private _router: Router) {  
  if (this._auth.loggedIn) {  
    this._router.navigate(['Dashboard']);  
  } 
}

// var testObject = { 'one': 1, 'two': 2, 'three': 3 };


onSubmit():void {
  // alert('details saved');
  //  localStorage.setItem("Regname",this.registerProfileForm.value.firstname);
  //  localStorage.setItem("Regword",this.registerProfileForm.value.password);

  // //  var retrievedObject = localStorage.getItem('firstnamel');
  // //  console.log("name is "+'retrievedObject: ', JSON.parse(retrievedObject));

  // var details = { "name": this.registerProfileForm.value.firstname, "password": this.registerProfileForm.value.password};

  // //stringify object and store
  // localStorage.setItem('details', JSON.stringify(details)); 
  // //retrieve the object
  // // var retrievedPerson = JSON.parse(localStorage.getItem('details')); 

  // console.log(details);



    this._auth.register(this.registerProfileForm.value.firstname,this.registerProfileForm.value.password)
}

}
