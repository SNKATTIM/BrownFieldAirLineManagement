import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetbyflightnumberComponent } from './getbyflightnumber.component';

describe('GetbyflightnumberComponent', () => {
  let component: GetbyflightnumberComponent;
  let fixture: ComponentFixture<GetbyflightnumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetbyflightnumberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetbyflightnumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
