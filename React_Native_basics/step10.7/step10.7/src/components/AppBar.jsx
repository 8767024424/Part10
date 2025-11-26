import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import AppBarTab from './AppBarTab';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#24292e',
  },
  scrollContent: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    alignItems: 'center',
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <AppBarTab label="Repositories" to="/" />
        <AppBarTab label="Create Review" to="/create" />
        <AppBarTab label="Sign In" to="/signin" />
        <AppBarTab label="Sign Out" to="/signout" />

        {/* Extra tabs to test horizontal scroll */}
        <AppBarTab label="Profile" to="/profile" />
        <AppBarTab label="About" to="/about" />
        <AppBarTab label="Contact" to="/contact" />
        <AppBarTab label="More" to="/more" />
        <AppBarTab label="Extra Tab" to="/extra" />
        <AppBarTab label="Extra Tab" to="/extra" />
        <AppBarTab label="Extra Tab" to="/extra" />
        <AppBarTab label="Extra Tab" to="/extra" />
        <AppBarTab label="Extra Tab" to="/extra" />
        <AppBarTab label="Extra Tab" to="/extra" />
        <AppBarTab label="Extra Tab" to="/extra" />

        <AppBarTab label="Extra Tab" to="/extra" />

        <AppBarTab label="Extra Tab" to="/extra" />
        <AppBarTab label="Extra Tab" to="/extra" />
        <AppBarTab label="Extra Tab" to="/extra" />
        <AppBarTab label="Extra Tab" to="/extra" />
      </ScrollView>
    </View>
  );
};

export default AppBar;
