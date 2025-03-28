import { createReducer, on } from '@ngrx/store';
import { createFormData, createFormDataFailure, createFormDataSuccess } from './stock-allocation.actions';
export interface FormState {
  data: any;
  loading: boolean;
  error: any;
}

export const initialState: FormState = {
  data: null,
  loading: false,
  error: null,
};

export const formReducer = createReducer(
  initialState,
  on(createFormData, (state) => ({ ...state, loading: true, error: null })),
  on(createFormDataSuccess, (state, { response }) => ({
    ...state,
    loading: false,
    data: response,
  })),
  on(createFormDataFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error: error,
  }))
);