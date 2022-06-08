/*
 * Created: 2022-06-08 11:07:16
 * Author: Andrei V. Rybkin <andrei@antakio.com>
 * -----
 * Copyright (c) 2022 Andrei V. Rybkin
 */

import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../config/types';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
