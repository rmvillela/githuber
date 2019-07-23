import { StyleSheet, Platform } from 'react-native';

import { getStatusBarHeight } from 'react-native-status-bar-height';

import { colors, metrics } from '../../styles/index';

const styles = StyleSheet.create({
  container: {
    height: Platform.OS === 'android' ? 55 : 55 + getStatusBarHeight(),
    paddingTop: Platform.OS === 'android' ? null : getStatusBarHeight(),
    borderBottomWidth: 1,
    borderBottomColor: colors.light,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: metrics.basePadding
  },

  title: {
    fontSize: 16,
    textAlign: 'center',
    color: colors.darker,
    fontWeight: 'bold'
  },

  icon: {
    color: colors.darker
  },
});

export default styles;
