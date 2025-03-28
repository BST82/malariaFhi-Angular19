import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockRequestRaisedComponent } from './stock-request-raised.component';

describe('StockRequestRaisedComponent', () => {
  let component: StockRequestRaisedComponent;
  let fixture: ComponentFixture<StockRequestRaisedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StockRequestRaisedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockRequestRaisedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
