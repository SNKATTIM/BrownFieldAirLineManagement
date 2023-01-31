import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetallflightsComponent } from './getallflights/getallflights.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { FlightDetailsComponent } from './flight-details/flight-details.component';
import { FormBuilder, FormGroup, FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { BookingComponent } from './booking/booking.component';
import { UserSingupComponent } from './user-singup/user-singup.component';
import { GetbyflightnumberComponent } from './getbyflightnumber/getbyflightnumber.component';
import { BookserviceService } from './bookservice.service';
import { FlightserviceService } from './flightservice.service';
import { SharedserviceService } from './sharedservice.service';
import { CheckInComponent } from './check-in/check-in.component';
import { PaymentComponent } from './payment/payment.component';
import { CheckinService } from './checkin.service';
import { LoginService } from './login.service';



@NgModule({
  declarations: [
    AppComponent,
    GetallflightsComponent,
    MenuComponent,
    HomeComponent,
    FlightDetailsComponent,
    BookingComponent,
    UserSingupComponent,
    GetbyflightnumberComponent,
    CheckInComponent,
    PaymentComponent,
   
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [BookserviceService,FlightserviceService,SharedserviceService,CheckinService,LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
