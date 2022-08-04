import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import type {RootState, AppDispatch} from '../types';

export const useHomeScreenDispatch = () => useDispatch<AppDispatch>();
export const useHomeScreenSelector: TypedUseSelectorHook<RootState> =
  useSelector;
