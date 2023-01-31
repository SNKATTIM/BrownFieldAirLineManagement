import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Flight } from './flight';

@Injectable({
  providedIn: 'root'
})
export class FlightserviceService {

  constructor(private https:HttpClient) { }

  private url ="http://localhost:8001/api/flight"
  public getallflights()
  {
    return this.https.get<Flight[]>(this.url+"/getall")
  }

  public getflightdetails(origin:any,destination:any,flightdate:any):Observable<any>
  {
    return this.https.get<any>(`${this.url+"/getbyoriginAndDest"}/${origin}/${destination}/${flightdate}`);
    
  }

  public getbyflightnumber(flightnumber:number):Observable<any>
  {
    return this.https.get<any>(`${this.url+"/flightNumber"}/${flightnumber}`);
    }
}
