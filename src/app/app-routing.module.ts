import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './booking/booking.component';
import { CheckInComponent } from './check-in/check-in.component';
import { FlightDetailsComponent } from './flight-details/flight-details.component';
import { GetallflightsComponent } from './getallflights/getallflights.component';
import { GetbyflightnumberComponent } from './getbyflightnumber/getbyflightnumber.component';
import { HomeComponent } from './home/home.component';
import { PaymentComponent } from './payment/payment.component';
import { UserSingupComponent } from './user-singup/user-singup.component';


const routes: Routes = [
//{path:'',redirectTo:'/home',pathMatch:'full'}, 
{path:'home',component:HomeComponent},
{path:'allflights',component:GetallflightsComponent},
{path:'flight-details',component:FlightDetailsComponent},
{path:'booking',component:BookingComponent},
{path:'user-signup',component:UserSingupComponent},
{path:'getbyflightnumber',component:GetbyflightnumberComponent},
{path:'checkin',component:CheckInComponent},
{path:'payment',component:PaymentComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
