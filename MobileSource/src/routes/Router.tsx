/*
 * Created: 2022-06-06 18:41:11
 * Author: Andrei V. Rybkin <andrei@antakio.com>
 * -----
 * Copyright (c) 2022 Andrei V. Rybkin
 */

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Routes } from './Routes';
import EventsScreen from '../screens/EventsScreen/EventsScreen';
import EventScreen from '../screens/EventScreen/EventScreen';

const Stack = createStackNavigator();

function RouterComponent() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
      }}
    >
      <Stack.Screen name={Routes.Events} component={EventsScreen} />
      <Stack.Screen name={Routes.Event} component={EventScreen} />
    </Stack.Navigator>
  );
}

export default function Router() {
  return <RouterComponent />;
}
