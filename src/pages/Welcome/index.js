import React from 'react';

import { View, Text } from 'react-native';

import styles from './styles';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

const Welcome = () => (
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
      />

      <TouchableOpacity 
        style={styles.button} 
        onPress={() => { console.log('teste')}} 
      >
        <Text style={styles.buttonText}>Prosseguir</Text>
      </TouchableOpacity>
    </View>
  </View>
);

export default Welcome;
