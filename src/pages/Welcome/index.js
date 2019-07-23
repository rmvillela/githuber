import React from 'react';
import api from '../../services/api';

import { View, Text, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';
import PropTypes from 'prop-types';
import styles from './styles';

export default class Welcome extends React.Component {
  static propTypes = { 
    navigation: PropTypes.shape({
      navigate: PropTypes.func
    }).isRequired,
  }
  
  state = {
    username: '',
    loading: false,
    error: false
  };

  checkUserExists = async (username) => {
    const user = await api.get(`/users/${username}`);
  
    return user;
  };

  saveUser = async (username) => {
    await AsyncStorage.setItem('@Githuber:username', username)
  }

  signIn = async () => {
    const { username } = this.state;
    const { navigation } = this.props;

    this.setState({ loading: true });

    try {
      await this.checkUserExists(username);
      await this.saveUser(username);

      navigation.navigate('Repositories');
    } catch (err) {
      this.setState({ loading: false, error: true });
    }
  };

  render() {
    const { loading, error } = this.state;

    return(
      <View style={styles.container}>
        <Text style={styles.title}>Bem-vindo</Text>
        <Text style={styles.text}>Para continuar precisamos que você informe seu nome de usuário</Text>

        { error && <Text style={styles.error}>Usuário inexistente</Text> }

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
            { loading ? <ActivityIndicator size="small" color="#fff" /> : <Text style={styles.buttonText}>Prosseguir</Text> }
          </TouchableOpacity>
        </View>
      </View>
    );
  }
} 