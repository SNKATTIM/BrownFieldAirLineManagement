import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Book } from './book';
import { Passenger } from './passenger';

@Injectable({
  providedIn: 'root'
})
export class BookserviceService {

  constructor(private httpclient:HttpClient) { }
  private url ="http://localhost:8060/api/book"


  public getbookwithfare(booking:Book):Observable<Book>
  {
   //const data= {booking,passengers}
    const headers = { 'content-type': 'application/json'}  
    return this.httpclient.post<Book>(this.url+"/create",booking,{'headers':headers})
  }

  getbybookingid(bookingid:Book):Observable<any>
  {
    return this.httpclient.get<any>(`${this.url+"/get"}/${bookingid}`)
  }

  deletebookingbyid(bookingid:any):Observable<any>
  {
    return this.httpclient.delete<any>(`${this.url+"/deletebyid"}/${bookingid}`)

  }


}
