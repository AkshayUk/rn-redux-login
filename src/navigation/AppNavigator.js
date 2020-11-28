import React from 'react';
import {useSelector} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';

import {HomeNavigator, AuthNavigator} from './ScreensNavigator';

const AppNavigator = () => {
  const isAuth = useSelector(state => !!state.authReducer.token);

  return (
    <NavigationContainer>
      {isAuth && <HomeNavigator />}
      {!isAuth && <AuthNavigator />}
    </NavigationContainer>
  );
};

export default AppNavigator;
