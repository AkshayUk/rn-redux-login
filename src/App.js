import React from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import Toast from 'react-native-toast-message';

// Reducer
import rootReducer from './store/reducer/index';

// Navigation
import AppNavigator from './navigation/AppNavigator';

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigator />
      <Toast ref={ref => Toast.setRef(ref)} />
    </Provider>
  );
}
