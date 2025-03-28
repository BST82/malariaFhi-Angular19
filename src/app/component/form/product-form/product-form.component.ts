import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule, // ✅ Added
    MatDatepickerModule,
    MatNativeDateModule
  ],
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent {
  stockForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.stockForm = this.fb.group({
      name: ['', Validators.required],
      is_active: [false],
      min_stock_level: [null, [Validators.required, Validators.min(0)]],
      unit_of_measure: ['', Validators.required],
      expiry_date: [null, Validators.required],
      batch_number: ['', Validators.required],
      manufacturer: ['', Validators.required],
      strength: ['', Validators.required],
      formulation: ['', Validators.required],
      generic_name: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.stockForm.valid) {
      console.log('Form Data:', this.stockForm.value);
      alert('Form Submitted Successfully!');
      this.stockForm.reset({
        is_active: false
      }); // Ensure checkbox doesn't turn undefined
    } else {
      alert('Please fill all required fields correctly.');
    }
  }
}
