import React from 'react';
import { View, StyleSheet, ScrollView, Pressable, Text } from 'react-native';
import Constants from 'expo-constants';
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#24292e', // GitHub dark header color
    flexDirection: 'row',
  },
  scrollView: {
    flexDirection: 'row',
  },
  tab: {
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  textSecondary: {
    color: '#ddd', // Slightly dimmer for inactive or secondary items
  }
});

const AppBarTab = ({ label, onPress }) => {
  return (
    <Pressable onPress={onPress} style={({ pressed }) => [
      styles.tab,
      pressed && { opacity: 0.5 } // Visual feedback on press
    ]}>
      <Text style={styles.text}>{label}</Text>
    </Pressable>
  );
};

const AppBar = ({ isSignedIn, onSignOut }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ScrollView horizontal style={styles.scrollView} showsHorizontalScrollIndicator={false}>
        
        {/* 1. Repository List Tab */}
        <AppBarTab 
          label="Repositories" 
          onPress={() => navigation.navigate('Repositories')} 
        />

        {/* 2. Create Review Tab (Visible only if signed in) */}
        {isSignedIn && (
          <AppBarTab 
            label="Create a review" 
            onPress={() => navigation.navigate('Create Review')} 
          />
        )}

        {/* 3. Sign In / Sign Out Logic */}
        {isSignedIn ? (
          <AppBarTab 
            label="Sign out" 
            onPress={onSignOut} 
          />
        ) : (
          <AppBarTab 
            label="Sign in" 
            onPress={() => navigation.navigate('Sign In')} 
          />
        )}

      </ScrollView>
    </View>
  );
};

export default AppBar;