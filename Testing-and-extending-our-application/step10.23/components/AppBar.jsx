import React from 'react';
import { View, StyleSheet, ScrollView, Text, Pressable } from 'react-native';
import { useNavigate } from 'react-router-native';  // If you use React Navigation, use navigation.navigate()

import useAuthStorage from '../hooks/useAuthStorage';
import { useApolloClient } from '@apollo/client';

const AppBarTab = ({ label, onPress }) => (
  <Pressable onPress={onPress}>
    <Text style={styles.tabText}>{label}</Text>
  </Pressable>
);

const AppBar = () => {
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();
  const navigation = useNavigate();

  const handleSignOut = async () => {
    await authStorage.removeAccessToken();
    apolloClient.resetStore();
    navigation('/signin');
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal style={styles.scroll}>
        <AppBarTab label="Repositories" onPress={() => navigation('/')} />
        <AppBarTab label="Create Review" onPress={() => navigation('/createReview')} />
        <AppBarTab label="My Reviews" onPress={() => navigation('/myReviews')} />
        <AppBarTab label="Sign In" onPress={() => navigation('/signin')} />
        <AppBarTab label="Sign Out" onPress={handleSignOut} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingBottom: 15,
    paddingLeft: 10,
    backgroundColor: '#24292e',
    flexDirection: 'row',
  },
  scroll: { flexDirection: 'row' },
  tabText: {
    color: 'white',
    marginRight: 20,
    fontSize: 18,
    fontWeight: '700',
  },
});

export default AppBar;
