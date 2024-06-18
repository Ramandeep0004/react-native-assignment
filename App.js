import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { BottomTabNavigator } from './source/navigation/bottomTabNavigator';
import Toast from 'react-native-toast-message';
import { toastConfig } from './source/helpers/toaster';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './source/redux/store';



export default function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <NavigationContainer>
            <BottomTabNavigator />
          </NavigationContainer>
        </PersistGate>
      </Provider>
      <Toast config={toastConfig} />
    </>
  );
};
