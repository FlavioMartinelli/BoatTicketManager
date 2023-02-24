import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketSubstractComponent } from './ticket-substract.component';

describe('TicketSubstractComponent', () => {
  let component: TicketSubstractComponent;
  let fixture: ComponentFixture<TicketSubstractComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketSubstractComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TicketSubstractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
