import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: 'white',
  },
  fullName: {
    fontSize: theme.fontSizes.subheading,
    fontWeight: theme.fontWeights.bold,
    marginBottom: 5,
  },
  description: {
    color: theme.colors.textSecondary,
    marginBottom: 5,
  },
  language: {
    color: theme.colors.primary,
    marginBottom: 5,
  },
});

const RepositoryItem = ({ fullName, description, language, forksCount, stargazersCount, reviewCount, ratingAverage }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.fullName}>Full name: {fullName}</Text>
      <Text style={styles.description}>Description: {description}</Text>
      <Text style={styles.language}>Language: {language}</Text>
      <Text>Stars: {stargazersCount}</Text>
      <Text>Forks: {forksCount}</Text>
      <Text>Reviews: {reviewCount}</Text>
      <Text>Rating: {ratingAverage}</Text>
    </View>
  );
};

export default RepositoryItem;
