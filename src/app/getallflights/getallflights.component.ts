import { Component, OnInit } from '@angular/core';
import { FlightserviceService } from '../flightservice.service';

@Component({
  selector: 'app-getallflights',
  templateUrl: './getallflights.component.html',
  styleUrls: ['./getallflights.component.css']
})
export class GetallflightsComponent implements OnInit {

  Flight: any[] = [];
  
  constructor(private flightservice:FlightserviceService) { }

  ngOnInit(): void 
  {this.getallflights();
  }
  getallflights()
  {
    return this.flightservice.getallflights().subscribe(data=>
      this.Flight=data,
      error=>console.log(error));
  }



}
