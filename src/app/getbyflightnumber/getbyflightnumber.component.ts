import { Text } from '@angular/compiler';
import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../book';
import { BookserviceService } from '../bookservice.service';


@Component({
  selector: 'app-getbyflightnumber',
  templateUrl: './getbyflightnumber.component.html',
  styleUrls: ['./getbyflightnumber.component.css']
})
export class GetbyflightnumberComponent implements OnInit {
  
  message='';
 
  book : Book= new Book()
  books:any=[];
  error: any;
 
  constructor(private bookservice:BookserviceService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    
  }

  getbythebookingid(myform:any)
  {
    console.log(myform.bookingid)
    this.bookservice.getbybookingid(myform.bookingid).subscribe(res=>
    {
      
      this.books=res
      console.log(res)
    },error=>{
      console.log(error.error)
      this.message=error.error
      this.books=new Book()
    })
  
  }

  deletebyid(books:any)
  {
    if(confirm('Do you want to delete booking ?'))
  
     this.bookservice.deletebookingbyid(books.bookId).subscribe((result)=>
    {
      this.books=result
      console.log(books)
      
    
    },error=>
    {
     console.log(error.error)
     this.message=error.error.text
     this.books= new Book()
    
    })
    

  }

}
