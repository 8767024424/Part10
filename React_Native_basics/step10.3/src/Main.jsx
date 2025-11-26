import React from 'react';
import { SafeAreaView, StatusBar, View } from 'react-native';
import RepositoryList from './components/RepositoryList';

const Main = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f2f2f2' }}>
      <StatusBar barStyle="dark-content" />
      <View style={{ padding: 10 }}>
        <RepositoryList />
      </View>
    </SafeAreaView>
  );
};

export default Main;
