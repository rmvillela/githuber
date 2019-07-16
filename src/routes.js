// In App.js in a new project

import { createStackNavigator, createAppContainer } from "react-navigation";

import Welcome from './pages/Welcome';
import Repositories from './pages/Repositories';

const Routes = (userLogged = false) => createAppContainer(
  createStackNavigator(
    {
      Welcome: {
        screen: Welcome
      },
      Repositories: {
        screen: Repositories
      }
    },
    {
      initialRouteName: userLogged ? 'Repositories' : 'Welcome',
      headerMode: 'none',
      navigationOptions: {
        headerVisible: false,
      }
    }
  )
);

export default Routes;