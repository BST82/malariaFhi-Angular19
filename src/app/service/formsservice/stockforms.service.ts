import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StockformsService {

  private apiUrl = 'http://localhost:3000/api/HCPPatientRegs';

  constructor(private http: HttpClient) {}

  /**
   * Submit form data to the backend
   * @param formData - Data from the form
   * @returns Observable<any>
   */
  submitForm(formData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, formData);
  }
}
