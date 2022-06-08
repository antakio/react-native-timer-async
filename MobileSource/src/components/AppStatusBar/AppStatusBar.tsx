/*
 * Created: 2022-06-06 16:16:32
 * Author: Andrei V. Rybkin <andrei@antakio.com>
 * -----
 * Copyright (c) 2022 Andrei V. Rybkin
 */

import React from 'react';
import { StatusBar } from 'react-native';
import { AppStatusBarProps } from '../../config/types';

const AppStatusBar = ({ barStyle }: AppStatusBarProps) => {
  return (
    <StatusBar
      translucent
      backgroundColor={'transparent'}
      barStyle={barStyle ? barStyle : 'dark-content'}
    />
  );
};

export default AppStatusBar;
