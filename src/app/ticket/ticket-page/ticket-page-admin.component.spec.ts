import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketPageAdminComponent } from './ticket-page-admin.component';

describe('TicketPageAdminComponent', () => {
  let component: TicketPageAdminComponent;
  let fixture: ComponentFixture<TicketPageAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketPageAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TicketPageAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
