import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Subscription } from 'rxjs';
import { Book } from '../book';

import { BookserviceService } from '../bookservice.service';
import { Passenger } from '../passenger';



@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit { clickeventsubscription: Subscription = new Subscription;
  
  
  
  //flights:any
  newbook = new Book()
  book=new Book()
  passenger = new Passenger()
  flightt:any=[]
  //passengers= new Passenger()
    //myform:any
    
  
  //passengers= new Passenger()
  //myform:any
  result:any
  //my: any;

  dataaray=[];



  constructor( private booskservice:BookserviceService,private router:Router) {
   
  //this.book.passengers[].firstname=this.book
   
   }

  ngOnInit(): void 
  {

this.flightt=JSON.parse(localStorage.getItem('session') || '');
this.book.flightNumber=this.flightt.flightNumber;
this.book.origin=this.flightt.origin;
this.book.destination=this.flightt.destination;
this.book.flightDate=this.flightt.flightdate;

 
  
  }
  
  /*save() {
    this.booskservice
    .getbookwithfare(this.book).subscribe(data => {
      console.log(data)
      this.book = new Book(0,'','','','',[]);
      //this.gotoList();
    }, 
    error => console.log(error));
  }
 
 
  getflightData(book:any)
  {
    
    this.booskservice.getbookwithfare(book).subscribe((data)=>
    {
      console.log(localStorage.getItem("session"));
      
      this.book = data
      //console.log(data)
      console.log(book)
      this.router.navigate(['checkin'])

    })

  }*/

  savedata(books:Book)
  {
   
    console.log(books)
    books=this.book
    console.log(this.book)
   // this.getdata()

    
  }

  getdata(book:Book)
  {
    console.log(book)   
    //this.passenger.firstname=book.passengers.firstname
    console.log(this.passenger.firstname)
    console.log(this.passenger.lastname)
    //console.log(this.passengers)
    console.log(this.passenger.gender)
    localStorage.setItem('book',JSON.stringify(this.passenger));
    
    this.book.passengers=JSON.parse(localStorage.getItem('book') || '');
    
    console.log(this.book.passengers)
   // console.log(this.book);
    this.newbook=this.book
    console.log(this.newbook)
    
    this.booskservice.getbookwithfare(this.newbook).subscribe((results)=>
    {
     
      console.log(results);
     
    })


  

    
  }



  

  }

  /*getdata(my:any)
  {
    this.booskservice.getbookwithfare(my).subscribe(datas=>
      {
        //this.my=datas
        console.log(datas)
      })
  }*/

  /*addform()
  {
    this.passengers= new Passenger
    //this.dataaray.push(Passenger)
  }*/

  
  



  
