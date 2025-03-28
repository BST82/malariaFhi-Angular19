import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { formReducer } from './store/formstore/stock-allocation-form-store/stock-allocation.reducer';
import { FormEffects } from './store/formstore/stock-allocation-form-store/stock-allocation.effects';


export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    provideHttpClient(), 
    provideStore({ form: formReducer }),
    provideEffects(FormEffects)
  ]
};
