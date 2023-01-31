import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Checkin } from '../checkin';
import { CheckinService } from '../checkin.service';

@Component({
  selector: 'app-check-in',
  templateUrl: './check-in.component.html',
  styleUrls: ['./check-in.component.css']
})
export class CheckInComponent implements OnInit {

  msg='';
   checkin=new Checkin(0,'',0)
  constructor(private checkinservice:CheckinService,private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.postcheck
  }
  postcheck(myform:any)
  {
    
    this.checkinservice.postcheckin(myform).subscribe((data)=>
    {

      console.log(myform)
      console.log(data)
      //this.gotolist();
      alert("checked in successfully")
    },
    error=>
    {
      console.log(error.error)
      this.msg=error.error
      
    })

  }

  

}
