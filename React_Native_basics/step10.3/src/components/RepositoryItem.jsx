import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 6,
    elevation: 2,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 4,
  },
  description: {
    marginBottom: 6,
  },
  language: {
    marginBottom: 8,
    fontStyle: 'italic',
  },
  stat: {
    marginBottom: 3,
    fontWeight: '500',
  },
});

const RepositoryItem = ({ repo }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Full name: {repo.fullName}</Text>
      <Text style={styles.description}>Description: {repo.description}</Text>
      <Text style={styles.language}>Language: {repo.language}</Text>

      <Text style={styles.stat}>Stars: {repo.stargazersCount}</Text>
      <Text style={styles.stat}>Forks: {repo.forksCount}</Text>
      <Text style={styles.stat}>Reviews: {repo.reviewCount}</Text>
      <Text style={styles.stat}>Rating: {repo.ratingAverage}</Text>
    </View>
  );
};

export default RepositoryItem;
