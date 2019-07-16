import React from 'react';
import api from '../../services/api';

import { View, Text } from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

import styles from './styles';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

export default class Welcome extends React.Component {
  state = {
    username: ''
  };

  checkUserExists = async (username) => {
    const user = await api.get(`/users/${username}`);
  
    return user;
  };

  saveUser = async (username) => {
    await AsyncStorage.setItem('@Gihuber:username', username)
  }

  signIn = async () => {
    const { username } = this.state;
    const { navigation } = this.props;

    try {
      await this.checkUserExists(username);
      await this.saveUser(username);
      
      navigation.navigate('Repositories');
    } catch (err) {
      console.log('Usuário inexistente');
    }
  };

  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.title}>Bem-vindo</Text>
        <Text style={styles.text}>Para continuar precisamos que você informe seu nome de usuário</Text>

        <View style={styles.form}>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Digite seu usuário"
            underlineColorAndroid="transparent"
            onChangeText={text => this.setState({ username: text })}
          />

          <TouchableOpacity 
            style={styles.button} 
            onPress={this.signIn} 
          >
            <Text style={styles.buttonText}>Prosseguir</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
} 