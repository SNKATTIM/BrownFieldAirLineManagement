import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AnyARecord } from 'dns';
import { Flight } from '../flight';
import { FlightserviceService } from '../flightservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 
 
  flight :any=[]

  flightnew : any=[]

 

  constructor(private flightservice:FlightserviceService,private route:ActivatedRoute,private router:Router) { 
   
  }

  ngOnInit(): void {
    //console.log(this.flight)
    console.log(this.route.snapshot.params['flightnumber'])
    
  }

  flightmodel = new Flight();

 

  getflightdata(fForm:any)
  {
    console.log(fForm);
    this.flightservice.getflightdetails(fForm.origin,fForm.destination,fForm.flightdate).subscribe(data=>{
      this.flight=data
     
      console.log(data)});
     

   
   
  }
  onclick(flightNumber:any)
  {
    let p:Flight
   let currentflight =  this.flight.find((p: { flightNumber: any; })=>{return p.flightNumber === flightNumber})
   console.log(currentflight)
   this.flightnew=currentflight
   console.log(this.flightnew)
   
   console.log(localStorage.setItem('session',JSON.stringify(currentflight)));
  // this.gotoList();
  }



  gotoList() {
    this.router.navigate(['/booking'])
  }

  

 

}
