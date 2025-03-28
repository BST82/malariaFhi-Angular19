import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockAllocationFormComponent } from './stock-allocation-form.component';

describe('StockAllocationFormComponent', () => {
  let component: StockAllocationFormComponent;
  let fixture: ComponentFixture<StockAllocationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StockAllocationFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockAllocationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
