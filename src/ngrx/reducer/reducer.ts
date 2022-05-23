import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset, addData } from '../action/actions';

export let initialState = [
  {
    id: 1,
    name: 'one',
  },
  {
    id: 2,
    name: 'two',
  },
];

export const Reducer = createReducer(
  initialState,
  on(addData, (state, { data }) => [
    ...state,
    { id: Math.random(), name: data },
  ])
);
