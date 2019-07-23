// In App.js in a new project

import { createStackNavigator, createAppContainer, createBottomTabNavigator } from "react-navigation";
import { colors } from './styles'
import Welcome from './pages/Welcome';
import Repositories from './pages/Repositories';
import Organizations from './pages/Organizations';

const Routes = (userLogged = false) => createAppContainer(
  createStackNavigator(
    {
      Welcome: {
        screen: Welcome
      },
      Users: createBottomTabNavigator({
        Repositories: {
          screen: Repositories
        },
        Organizations: {
          screen: Organizations
        }
      },{
        tabBarOptions: {
          showIcon: true,
          showLabel: false,
          activeTintColor: colors.white,
          inactiveTintColor: colors.whiteTransparent,
          style: {
            backgroundColor: colors.secondary  
          }
        }
      })
    },
    {
      initialRouteName: userLogged ? 'Users' : 'Welcome',
      headerMode: 'none',
      navigationOptions: {
        headerVisible: false,
      }
    }
  )
);

export default Routes;