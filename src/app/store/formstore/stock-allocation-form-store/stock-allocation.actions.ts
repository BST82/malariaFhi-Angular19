import { createAction, props } from '@ngrx/store';

export const createFormData = createAction(
  '[Form] Create Data',
  props<{ data: any }>()
);
export const createFormDataSuccess = createAction(
  '[Form] Create Data Success',
  props<{ response: any }>()
);

export const createFormDataFailure = createAction(
  '[Form] Create Data Failure',
  props<{ error: any }>()
);