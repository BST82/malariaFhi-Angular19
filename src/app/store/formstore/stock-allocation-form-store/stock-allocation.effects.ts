import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { createFormData, createFormDataFailure, createFormDataSuccess } from './stock-allocation.actions';
import { StockformsService } from '../../../service/formsservice/stockforms.service'; 
import { exhaustMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class FormEffects {
  private actions$ = inject(Actions);
  private formService = inject(StockformsService);

  constructor() {}

  saveForm$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createFormData),
      exhaustMap((action) =>
        this.formService.submitForm(action.data).pipe(
          //map((response) => ({ type: '[Form] Create Data Success', payload: response })),
          //catchError((error) => of({ type: '[Form] Create Data Failure', error }))
          map((response) => createFormDataSuccess({ response })),
          catchError((error) => of(createFormDataFailure({ error })))
        )
      )
    )
  );
}
