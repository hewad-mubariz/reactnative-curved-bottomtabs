import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import BottomTabs from './containers/BottomTabs';
import changeNavigationBarColor from 'react-native-navigation-bar-color';
const App = () => {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle={'dark-content'} />
      <NavigationContainer onReady={() => changeNavigationBarColor('white')}>
        <BottomTabs />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
