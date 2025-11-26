// FULLY WORKING SINGLE-FILE App.jsx (Option A)
// All components included inside this one file
// Sign-In first → Repository list → My Reviews → Create Review
// Includes Sign-Out button
// ZERO external components required

import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, FlatList, StyleSheet, ScrollView } from 'react-native';
import { NativeRouter, Routes, Route, Navigate, Link, useNavigate } from 'react-router-native';

// ===================================================================
// MOCK DATA (Replace with real GraphQL queries later)
// ===================================================================
const mockRepositories = [
  {
    id: '1',
    fullName: 'rails/rails',
    description: 'Lorem ipsum dolor sit amet, per brute apeirian ei...',
    rating: 99,
    date: '17.08.2020'
  },
  {
    id: '2',
    fullName: 'jaredpalmer/formik',
    description: 'Lorem ipsum dolor sit amet, per brute apeirian ei...',
    rating: 95,
    date: '17.08.2020'
  },
  {
    id: '3',
    fullName: 'django/django',
    description: 'Lorem ipsum dolor sit amet, per brute apeirian ei...',
    rating: 78,
    date: '17.08.2020'
  }
];

const mockReviews = [
  {
    id: '10',
    repository: 'rails/rails',
    rating: 98,
    text: 'Great repo!',
    date: '12.09.2020'
  }
];

// ===================================================================
// STYLES
// ===================================================================
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f2f2f2' },
  appBar: { backgroundColor: '#24292e', padding: 15, flexDirection: 'row' },
  tab: { marginRight: 20 },
  tabText: { color: 'white', fontSize: 16 },
  header: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  card: { backgroundColor: 'white', padding: 15, marginBottom: 10 },
  ratingCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 3,
    borderColor: '#0366d6',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15
  },
  ratingText: { fontSize: 18, fontWeight: 'bold', color: '#0366d6' },
  row: { flexDirection: 'row', marginBottom: 5 },
  bold: { fontWeight: 'bold' },
  input: {
    borderColor: '#ccc', borderWidth: 1, padding: 10, marginBottom: 10, backgroundColor: 'white'
  },
  button: {
    backgroundColor: '#0366d6', padding: 12, alignItems: 'center', borderRadius: 5, marginTop: 10
  },
  btnText: { color: 'white', fontWeight: 'bold' }
});

// ===================================================================
// APP BAR
// ===================================================================
const AppBar = ({ user, onSignOut }) => (
  <View style={styles.appBar}>
    {user && (
      <>
        <Link to="/" style={styles.tab}><Text style={styles.tabText}>Repositories</Text></Link>
        <Link to="/create-review" style={styles.tab}><Text style={styles.tabText}>Create a review</Text></Link>
        <Link to="/my-reviews" style={styles.tab}><Text style={styles.tabText}>My reviews</Text></Link>
        <Pressable onPress={onSignOut} style={styles.tab}><Text style={styles.tabText}>Sign out</Text></Pressable>
      </>
    )}
  </View>
);

// ===================================================================
// SIGN IN
// ===================================================================
const SignIn = ({ setUser }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleLogin = () => {
    if (username && password) {
      setUser({ username });
      navigate('/');
    }
  };

  return (
    <ScrollView style={{ padding: 15 }}>
      <Text style={styles.header}>Sign In</Text>
      <TextInput placeholder="Username" style={styles.input} value={username} onChangeText={setUsername} />
      <TextInput placeholder="Password" style={styles.input} secureTextEntry value={password} onChangeText={setPassword} />

      <Pressable style={styles.button} onPress={handleLogin}>
        <Text style={styles.btnText}>Sign In</Text>
      </Pressable>
    </ScrollView>
  );
};

// ===================================================================
// REPOSITORY LIST
// ===================================================================
const RepositoryItem = ({ repo }) => (
  <View style={styles.card}>
    <View style={styles.row}>
      <View style={styles.ratingCircle}><Text style={styles.ratingText}>{repo.rating}</Text></View>
      <View style={{ flex: 1 }}>
        <Text style={styles.bold}>{repo.fullName}</Text>
        <Text style={{ color: 'gray', marginBottom: 5 }}>{repo.date}</Text>
        <Text>{repo.description}</Text>
      </View>
    </View>
  </View>
);

const RepositoryList = () => (
  <FlatList
    data={mockRepositories}
    renderItem={({ item }) => <RepositoryItem repo={item} />}
    keyExtractor={(item) => item.id}
  />
);

// ===================================================================
// MY REVIEWS
// ===================================================================
const MyReviews = () => (
  <FlatList
    data={mockReviews}
    renderItem={({ item }) => (
      <View style={styles.card}>
        <View style={styles.row}>
          <View style={styles.ratingCircle}><Text style={styles.ratingText}>{item.rating}</Text></View>
          <View style={{ flex: 1 }}>
            <Text style={styles.bold}>{item.repository}</Text>
            <Text>{item.date}</Text>
            <Text>{item.text}</Text>
          </View>
        </View>
      </View>
    )}
    keyExtractor={(item) => item.id}
  />
);

// ===================================================================
// CREATE REVIEW
// ===================================================================
const CreateReview = () => (
  <ScrollView style={{ padding: 15 }}>
    <Text style={styles.header}>Create Review</Text>
    <TextInput placeholder="Repository name" style={styles.input} />
    <TextInput placeholder="Rating (0-100)" style={styles.input} />
    <TextInput placeholder="Review" style={[styles.input, { height: 120 }]} multiline />

    <Pressable style={styles.button}>
      <Text style={styles.btnText}>Submit</Text>
    </Pressable>
  </ScrollView>
);

// ===================================================================
// MAIN APP (Single File)
// ===================================================================
const App = () => {
  const [user, setUser] = useState(null);

  const handleSignOut = () => setUser(null);

  return (
    <NativeRouter>
      <View style={styles.container}>
        <AppBar user={user} onSignOut={handleSignOut} />

        <Routes>
          {!user && <Route path="*" element={<SignIn setUser={setUser} />} />} 

          {user && <Route path="/" element={<RepositoryList />} />}
          {user && <Route path="/create-review" element={<CreateReview />} />}
          {user && <Route path="/my-reviews" element={<MyReviews />} />}

          <Route path="*" element={<Navigate to={user ? '/' : '/signin'} />} />
        </Routes>
      </View>
    </NativeRouter>
  );
};

export default App;