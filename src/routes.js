// In App.js in a new project

import { createStackNavigator, createAppContainer } from "react-navigation";

import Welcome from './pages/Welcome';
import Repositories from './pages/Repositories';

const AppNavigator = createStackNavigator({
  Welcome: {
    screen: Welcome
  },
  Repositories: {
    screen: Repositories
  }
});

export default createAppContainer(AppNavigator);