import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectFormState } from '../../../store/formstore/stock-allocation-form-store/stock-allocation.selectors';
import { createFormData } from '../../../store/formstore/stock-allocation-form-store/stock-allocation.actions';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

// ✅ Angular Material Modules
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select'; // ✅ Added
import { MatOptionModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

// ✅ Child Component
import { StockRequestRaisedTableComponent } from "../../table/stock-request-raised-table/stock-request-raised-table.component";
@Component({
  selector: 'app-stock-allocation-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule, // ✅ Added
    MatOptionModule, // ✅ Added
    StockRequestRaisedTableComponent,
    MatNativeDateModule,
    MatDatepickerModule
  ], // ✅ Fixed
  templateUrl: './stock-allocation-form.component.html',
  styleUrl: './stock-allocation-form.component.scss'
})
export class StockAllocationFormComponent implements OnInit {
  form!: FormGroup;
  formState$!: Observable<any>;

  private fb = inject(FormBuilder);
  private store = inject(Store);

  // ✅ Sample Medicine Data
  medicines: string[] = ['Paracetamol', 'Ibuprofen', 'Amoxicillin', 'Cetirizine', 'Aspirin'];

  constructor() {}

  ngOnInit() {
    this.form = this.fb.group({
      address: this.fb.group({
        state: ['', Validators.required],
        district: ['', Validators.required],
        block: ['', Validators.required],
        chc: ['', Validators.required],
        phc: ['', Validators.required],
        shc: ['', Validators.required]
      }),
      medicine: ['', Validators.required],
      dateOfRequest: ['', Validators.required], // ✅ Added Date field
      quantity: ['', [Validators.required, Validators.min(1)]] // ✅ Added Quantity field
    });

    // Select the state from NgRx Store
    this.formState$ = this.store.select(selectFormState);
  }

  onSubmit() {
    if (this.form.valid) {
      // Dispatch action to NgRx store
      this.store.dispatch(createFormData({ data: this.form.value }));

      // Show SweetAlert confirmation
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Stock Allocation Submitted Successfully!',
        confirmButtonColor: '#F2994A',
      }).then(() => {
        this.form.reset(); // Reset form after successful submission
      });
    }
  }
}
