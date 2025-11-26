import React from 'react';
import { View, Pressable, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  button: { backgroundColor: '#0366d6', padding: 15, borderRadius: 5, width: '100%', alignItems: 'center' },
  text: { color: 'white', fontWeight: 'bold' }
});

const SignIn = ({ setIsSignedIn }) => {
  const navigation = useNavigation();

  const handleSignIn = () => {
    // In a real app, you would call a LOGIN mutation here
    setIsSignedIn(true);
    navigation.navigate('Repositories');
  };

  return (
    <View style={styles.container}>
      <Text style={{ marginBottom: 20, fontSize: 20 }}>Sign In Page</Text>
      <Pressable onPress={handleSignIn} style={styles.button}>
        <Text style={styles.text}>Sign In</Text>
      </Pressable>
    </View>
  );
};

export default SignIn;