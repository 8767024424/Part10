import React from 'react';
import { Route, Routes } from 'react-router-native';
import { View, Text } from 'react-native';
import SignIn from './SignIn';

const Main = () => {
  return (
    <View style={{ flex: 1 }}>
      <Routes>
        <Route path="/" element={<Text>Repository List Coming Soon...</Text>} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </View>
  );
};

export default Main;
