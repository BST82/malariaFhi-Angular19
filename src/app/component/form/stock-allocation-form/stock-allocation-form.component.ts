import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectFormState } from '../../../store/formstore/stock-allocation-form-store/stock-allocation.selectors';
import { createFormData } from '../../../store/formstore/stock-allocation-form-store/stock-allocation.actions';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';  // ✅ Added
import { MatButtonModule } from '@angular/material/button'; // ✅ Added

@Component({
  selector: 'app-stock-allocation-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule], // ✅ Fixed
  templateUrl: './stock-allocation-form.component.html',
  styleUrl: './stock-allocation-form.component.scss'
})
export class StockAllocationFormComponent implements OnInit {
  form!: FormGroup;
  formState$!: Observable<any>;

  private fb = inject(FormBuilder);
  private store = inject(Store);

  constructor() {}

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      address: this.fb.group({
        street: ['', Validators.required],
        city: ['', Validators.required],
        zip: ['', Validators.required],
      }),
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
