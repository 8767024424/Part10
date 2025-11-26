import React from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';
import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  item: {
    padding: 20,
    backgroundColor: 'white',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryItem = ({ item }) => (
  <View style={styles.item}>
    <Text style={styles.title}>Full Name: {item.fullName}</Text>
    <Text>Description: {item.description}</Text>
    <Text>Language: {item.language}</Text>
    <Text>Rating: {item.ratingAverage}</Text>
  </View>
);

const RepositoryList = () => {
  // Fetch data from backend
  const { data, error, loading } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
  });

  if (loading) return <View style={styles.item}><Text>Loading repositories...</Text></View>;
  if (error) return <View style={styles.item}><Text>Error: {error.message}</Text></View>;

  // Get the nodes from the edges
  const repositories = data ? data.repositories.edges.map(edge => edge.node) : [];

  return (
    <FlatList
      data={repositories}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <RepositoryItem item={item} />}
      keyExtractor={item => item.id}
    />
  );
};

export default RepositoryList;