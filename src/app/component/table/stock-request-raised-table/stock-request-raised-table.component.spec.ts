import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockRequestRaisedTableComponent } from './stock-request-raised-table.component';

describe('StockRequestRaisedTableComponent', () => {
  let component: StockRequestRaisedTableComponent;
  let fixture: ComponentFixture<StockRequestRaisedTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StockRequestRaisedTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockRequestRaisedTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
