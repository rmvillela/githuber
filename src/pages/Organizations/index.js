import React from 'react';
import { View, Text, ActivityIndicator, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from '../../components/Header';
import api from '../../services/api';
import AsyncStorage from '@react-native-community/async-storage';
import styles from './styles';
import OrganizationItem from './OrganizationItem';

const TabIcon = ({ tintColor }) => <Icon name='building' size={20} color={tintColor} /> 

TabIcon.propTypes = {
  tintColor: PropTypes.string.isRequired
};

export default class Organizations extends React.Component {
  static navigationOptions = {
    tabBarIcon: TabIcon,
  };
  
  state = {
    data: [],
    loading: true,
    refreshing: false,
  }
  
  componentDidMount() {
    this.loadOrganizations();
  };

  loadOrganizations = async () => {
    this.setState({ refreshing: true });

    const username = await AsyncStorage.getItem('@Githuber:username');
    const { data } = await api.get(`/users/${username}/orgs`);

    this.setState({ data, loading: false, refreshing: false });
  }

  renderListItem = ({ item }) => <OrganizationItem organization={item}/>

  renderList = () => {
    const { data, refreshing } = this.state;
    
    return (
      <FlatList
        columnWrapperStyle={styles.columnWrapper} 
        numColumns={2}
        data={data}
        keyExtractor={item => String(item.id)}
        renderItem={this.renderListItem}
        onRefresh={this.loadOrganizations}
        refreshing={refreshing}
      />
    );
  };

  render() {
    const { loading } = this.state;

    return (
      <View style={styles.container}>
        <Header title='Organizations'/>
        { loading ? <ActivityIndicator style={styles.loading} /> : this.renderList() }
      </View>
    );
  }
}