import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-user-singup',
  templateUrl: './user-singup.component.html',
  styleUrls: ['./user-singup.component.css']
})
export class UserSingupComponent implements OnInit {

  credentials={
    username:'',
    password:''
  }
  
  constructor(private loginservice: LoginService) { }

  ngOnInit(): void {
    
  }

  onsubmitting()
  {
    console.log("form submitted");
    if((this.credentials.username!='' && this.credentials.password!='')&& (this.credentials.username!=null && this.credentials.password!=null))
    {
      console.log("shud be submitted");
      this.loginservice.generateToken(this.credentials).subscribe(
        (response:any)=>
        {
          console.log(response.token);
          this.loginservice.loginuser(response.token)
          window.location.href= "/home"
        },
        error=>{
          console.log(error);
          window.alert("Invalid credentials");

        }
      )
      

    }else{
      console.log("empty");
    }

  }


 

 
}
