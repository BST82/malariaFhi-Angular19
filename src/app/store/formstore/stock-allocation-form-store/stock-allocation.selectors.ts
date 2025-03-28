import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FormState } from './stock-allocation.reducer';

export const selectFormState = createFeatureSelector<FormState>('form');

export const selectFormData = createSelector(selectFormState, (state) => state.data);
export const selectLoading = createSelector(selectFormState, (state) => state.loading);
export const selectError = createSelector(selectFormState, (state) => state.error);
