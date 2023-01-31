import { Component, OnInit } from '@angular/core';
import { switchAll } from 'rxjs';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  alert:boolean=false;
  //const Swal = require('sweetalert2')

  constructor() { }

  ngOnInit(): void {
  }
 

}
