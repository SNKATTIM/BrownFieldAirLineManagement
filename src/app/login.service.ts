import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url= 'http://localhost:8090' 
  
  constructor(private http:HttpClient) { }

  //calling server to generate token
 generateToken(credentials:any){
  return this.http.post(`${this.url}/token`, credentials);
 }

  //for login user
  loginuser(token: any){
    localStorage.setItem("token",token)
    return true;
  }

  //to check user logged in or not
  isloggedIn()
  {
    let token = localStorage.getItem("token");
    if(token == undefined || token ==='' || token==null)
    {
      return false;
    }else{
      return true;
    }
  }


  logout(){
    localStorage.removeItem('token')
    return true;
  }

  //for getting token 
  getToken(){
    return localStorage.getItem("token")
  }
}
