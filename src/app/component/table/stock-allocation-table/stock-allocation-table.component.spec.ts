import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockAllocationTableComponent } from './stock-allocation-table.component';

describe('StockAllocationTableComponent', () => {
  let component: StockAllocationTableComponent;
  let fixture: ComponentFixture<StockAllocationTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StockAllocationTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockAllocationTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
