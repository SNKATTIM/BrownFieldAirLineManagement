export class Flight
 
{
    id:number=0;    
         flightnumber:number=0;
         flight_Name:String='';
       origin:String='';
       destination:String='';
        flightdate:String='';
        Flight_time:String='';
        fares: {
          id: any;
          fare: any;
          currency: any;

        } | any;
        inventory:
        {
             id:any;
             count:any;
        }| any;
        




   

    

    
}
