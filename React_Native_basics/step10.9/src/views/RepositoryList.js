import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const sampleRepositories = [
  { id: '1', name: 'React Native Repo', rating: 95 },
  { id: '2', name: 'NodeJS API Repo', rating: 88 },
  { id: '3', name: 'Machine Learning Repo', rating: 92 },
];

export default function RepositoryList() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Repository List</Text>

      <FlatList
        data={sampleRepositories}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.name}>{item.name}</Text>
            <Text>Rating: {item.rating}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  header: { fontSize: 24, marginBottom: 15 },
  card: {
    padding: 15,
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 8,
  },
  name: { fontSize: 18, fontWeight: 'bold' },
});
