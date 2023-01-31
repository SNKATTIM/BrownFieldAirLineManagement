import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedserviceService
{
  public subject = new Subject<any>();

  constructor() { }
  senddata(data:any)
  {
    this.subject.next(data);
  }

}
