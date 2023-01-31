import { Passenger } from "./passenger";


export class Book 
{
  
   
    bookingid:any;
    flightNumber:any;
    origin:String='';
    destination:String='';
    flightDate:String='';
    bookingdate: String='';


   fare:number=0;
   TotalFare=0;
   status:String='';

    
 passengers: {
        firstname: any;
        lastname: any;
        gender: any;
    } | []=[];

        /*constructor(flightNumber:any,origin:String,destination:String,flightdate:String,bookingdate:String,passenger: any  )
        {
            this.flightNumber=flightNumber;
            this.origin=origin;
            this.destination=destination;
            this.flightDate=flightdate;
            this.bookingdate=bookingdate;
            this.passenger=passenger;
            //this.Passenger = this.Passenger.firstname= this.form1.controls['firstname'].value;
        
        
        }*/

      
       
       

   

  

    
    /*constructor(flightNumber:any,origin:String,destination:String,flightdate:String,bookingdate:String,passenger: any  )
    {
        this.flightNumber=flightNumber;
        this.origin=origin;
        this.destination=destination;
        this.flightDate=flightdate;
        this.bookingdate=bookingdate;
        this.passenger=passenger;
        //this.Passenger = this.Passenger.firstname= this.form1.controls['firstname'].value;


    }*/

}
