import React from 'react';

import AsyncStorage from '@react-native-community/async-storage';

import createNavigator from './routes';

export default class App extends React.Component {
  state = {
    userChecked: false,
    userLogged: false,
  };

  getData = async () => {
    try {
      const username = await AsyncStorage.getItem('@Githuber:username');

      if(username !== null) {
        this.setState({
          userChecked: true,
          userLogged: !!username
        });
      }
    } catch(e) {
      console.log(e);
    }
  }

  componentDidMount() {
    this.getData();    
  }
  
  render() {
    const { userLogged } = this.state;

    const Routes = createNavigator(userLogged);

    return (
      <Routes />
    );
  }
}