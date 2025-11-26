import React from 'react';
import { View, StyleSheet } from 'react-native';
import AppBar from './components/AppBar';
import RepositoryList from './components/RepositoryList';
import theme from './theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.mainBg,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <RepositoryList />
    </View>
  );
};

export default Main;
