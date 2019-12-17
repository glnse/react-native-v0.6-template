import React from 'react';

// Redux
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import reducer from './app/redux/index';

// Navigation
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

// Screens
import Welcome from './app/screens/Welcome';

const client = axios.create({
  method: 'GET',
  responseType: 'json'
});

const store = createStore(reducer, applyMiddleware(axiosMiddleware(client)));

const AppStack = createStackNavigator({
  Welcome: Welcome
});

const RootStack = createSwitchNavigator({
  App: AppStack
},
{
  initialRouteName: 'App'
});

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer/>
      </Provider>
    );
  }
}