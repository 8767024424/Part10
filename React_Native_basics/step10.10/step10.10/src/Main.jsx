import React from 'react';
import { View } from 'react-native';
import { Routes, Route } from 'react-router-native';

import AppBar from './components/AppBar';
import Repositories from './pages/Repositories';
import CreateReview from './pages/CreateReview';
import SignIn from './pages/SignIn';
import SignOut from './pages/SignOut';
import Profile from './pages/Profile';
import About from './pages/About';
import Contact from './pages/Contact';

const Main = () => {
  return (
    <View style={{ flex: 1 }}>
      <AppBar />
      <Routes>
        <Route path="/" element={<Repositories />} />
        <Route path="/create" element={<CreateReview />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signout" element={<SignOut />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </View>
  );
};

export default Main;
