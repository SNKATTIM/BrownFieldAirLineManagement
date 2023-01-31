import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Checkin } from './checkin';

@Injectable({
  providedIn: 'root'
})
export class CheckinService {

  private urls='http://localhost:8070/api/checkin'
  constructor(private https:HttpClient) { }

  getallcheckin()
  {
    return this.https.get<any>(`${this.urls+"/getall"}`)
  }

  postcheckin(checkin:Checkin):Observable<any>
  {
    const headers = { 'content-type': 'application/json'}  
    return this.https.post<any>(`${this.urls+"/checkingIn"}`,checkin,{'headers':headers})
  }
}
