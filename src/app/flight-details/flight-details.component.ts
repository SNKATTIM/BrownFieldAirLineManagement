import { Component, OnInit } from '@angular/core';
import { FlightserviceService } from '../flightservice.service';

@Component({
  selector: 'app-flight-details',
  templateUrl: './flight-details.component.html',
  styleUrls: ['./flight-details.component.css']
})
export class FlightDetailsComponent implements OnInit {

  flight: any[] = [];
  constructor(private flightservice:FlightserviceService)
   { 
    this.flight
   }

  ngOnInit(): void {
  }

  getflightdetails(origin:String,destination:String,flightdate:String)
  {
    this.flightservice.getflightdetails(origin,destination,flightdate).subscribe(result=>
      {console.log(result)
      this.flight=result},
      error=>console.log(error));
  }



}
