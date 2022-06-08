/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import store from './src/redux/store';

import AppStatusBar from './src/components/AppStatusBar/AppStatusBar';
import Router from './src/routes/Router';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppStatusBar />
        <Router />
      </NavigationContainer>
    </Provider>
  );
};
export default App;
