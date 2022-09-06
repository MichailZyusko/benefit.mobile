import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import type {RootState, AppDispatch} from '../types';

export const useHomeScreenDispatch = () => useDispatch<AppDispatch>();
export const useHomeScreenSelector: TypedUseSelectorHook<RootState> =
  useSelector;

export const useCartScreenDispatch = () => useDispatch<AppDispatch>();
export const useCartScreenSelector: TypedUseSelectorHook<RootState> =
  useSelector;

export const useProductCardDispatch = () => useDispatch<AppDispatch>();
export const useProductCardSelector: TypedUseSelectorHook<RootState> =
  useSelector;

export const useModalWindowDispatch = () => useDispatch<AppDispatch>();
export const useModalWindowSelector: TypedUseSelectorHook<RootState> =
  useSelector;
