import React from 'react';
import { View, Button, Alert } from 'react-native';
import AuthStorage from '../src/utils/authStorage';


export default function SignOut() {
const handleSignOut = async () => {
await AuthStorage.removeAccessToken();
Alert.alert('Signed out');
};


return (
<View style={{ padding: 8 }}>
<Button title="Sign out" onPress={handleSignOut} />
</View>
);
}