import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import { ProductFormComponent } from "../../form/product-form/product-form.component";

@Component({
  selector: 'app-products',
  imports: [CommonModule, MatTableModule, ProductFormComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  displayedColumns: string[] = ['name', 'is_active', 'min_stock_level', 'unit_of_measure', 'expiry_date', 'batch_number', 'manufacturer', 'strength', 'formulation', 'generic_name'];
  dataSource = [
    { name: 'Paracetamol', is_active: true, min_stock_level: 10, unit_of_measure: 'Tablets', expiry_date: '2025-06-15', batch_number: 'B12345', manufacturer: 'ABC Pharma', strength: '500mg', formulation: 'Tablet', generic_name: 'Acetaminophen' },
    { name: 'Amoxicillin', is_active: true, min_stock_level: 8, unit_of_measure: 'Capsules', expiry_date: '2026-01-30', batch_number: 'A56789', manufacturer: 'MediLife', strength: '250mg', formulation: 'Capsule', generic_name: 'Amoxicillin' },
    { name: 'Ibuprofen', is_active: true, min_stock_level: 12, unit_of_measure: 'Tablets', expiry_date: '2025-09-10', batch_number: 'I11223', manufacturer: 'HealthCare Ltd', strength: '200mg', formulation: 'Tablet', generic_name: 'Ibuprofen' },
    { name: 'Vitamin C', is_active: true, min_stock_level: 20, unit_of_measure: 'Tablets', expiry_date: '2026-04-25', batch_number: 'V33456', manufacturer: 'Wellness Pharma', strength: '1000mg', formulation: 'Tablet', generic_name: 'Ascorbic Acid' },
    { name: 'Insulin', is_active: true, min_stock_level: 3, unit_of_measure: 'Vials', expiry_date: '2025-08-15', batch_number: 'I77654', manufacturer: 'Diabetes Care', strength: '10ml', formulation: 'Injection', generic_name: 'Insulin' },
    { name: 'Azithromycin', is_active: true, min_stock_level: 6, unit_of_measure: 'Tablets', expiry_date: '2025-12-22', batch_number: 'A54321', manufacturer: 'Antibiotic Corp', strength: '500mg', formulation: 'Tablet', generic_name: 'Azithromycin' },
    { name: 'Omeprazole', is_active: true, min_stock_level: 4, unit_of_measure: 'Capsules', expiry_date: '2026-03-18', batch_number: 'O55678', manufacturer: 'Gastro Pharma', strength: '20mg', formulation: 'Capsule', generic_name: 'Omeprazole' },
    { name: 'Metformin', is_active: true, min_stock_level: 15, unit_of_measure: 'Tablets', expiry_date: '2026-02-14', batch_number: 'M12399', manufacturer: 'Diabetes Meds', strength: '500mg', formulation: 'Tablet', generic_name: 'Metformin' },
    { name: 'Loratadine', is_active: true, min_stock_level: 8, unit_of_measure: 'Tablets', expiry_date: '2025-08-10', batch_number: 'L55433', manufacturer: 'Allergy Care', strength: '10mg', formulation: 'Tablet', generic_name: 'Loratadine' },
    { name: 'Diclofenac', is_active: true, min_stock_level: 5, unit_of_measure: 'Gel', expiry_date: '2025-10-05', batch_number: 'D77644', manufacturer: 'Pain Relief Ltd', strength: '50mg', formulation: 'Gel', generic_name: 'Diclofenac' },

  ];
}
