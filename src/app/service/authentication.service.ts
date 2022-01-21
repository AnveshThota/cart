import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }
  
  login(username: string, password: string) 
  {  
    
       localStorage.setItem('loginuser',username);
      var user=localStorage.getItem('regusername');
     var pass= localStorage.getItem('regpassword');
     alert("name" +user+username);
     if (username == user && password == pass){
      localStorage.setItem('currentUser', "loggedin"); 

      return true; 
     }

       
    
    return false; 
  }  
  register(regusername: string, regpassword: string)
  {
     
      localStorage.setItem('regusername', regusername);  
      localStorage.setItem('regpassword', regpassword);  
      alert(regusername+regpassword);
    
    
  }
  logout() {  
    localStorage.removeItem('regusername');  
    localStorage.removeItem('regpassword');  
  localStorage.removeItem('currentUser');
    localStorage.removeItem('loginuser');


  }  
  public get loggedIn(): boolean {  
    return (localStorage.getItem('currentUser') !== null);  
  }
}
