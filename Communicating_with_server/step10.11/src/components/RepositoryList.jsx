import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import useRepositories from '../hooks/useRepositories';

const RepositoryList = () => {
  const { repositories, loading, error } = useRepositories();

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error fetching repositories</Text>;

  return (
    <FlatList
      data={repositories}
      keyExtractor={repo => repo.id}
      renderItem={({ item }) => (
        <View style={styles.repoContainer}>
          <Image source={{ uri: item.ownerAvatarUrl }} style={styles.avatar} />
          <View>
            <Text style={styles.name}>{item.fullName}</Text>
            <Text>{item.description}</Text>
            <Text>Language: {item.language}</Text>
            <Text>Stars: {item.stargazersCount}</Text>
            <Text>Forks: {item.forksCount}</Text>
            <Text>Rating: {item.ratingAverage}</Text>
            <Text>Reviews: {item.reviewCount}</Text>
          </View>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  repoContainer: {
    flexDirection: 'row',
    margin: 10,
    backgroundColor: '#f2f2f2',
    padding: 10,
    borderRadius: 5,
  },
  avatar: { width: 50, height: 50, marginRight: 10 },
  name: { fontWeight: 'bold' },
});

export default RepositoryList;
