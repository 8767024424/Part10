import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
    padding: 15,
  },
  upperRow: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 4,
    marginRight: 15,
  },
  languageTag: {
    backgroundColor: theme.colors.primary,
    color: theme.colors.white,
    paddingHorizontal: 8,
    paddingVertical: 4,
    alignSelf: 'flex-start',
    borderRadius: 4,
    marginTop: 5,
    fontSize: 14,
    fontWeight: '700',
  },
  name: {
    fontWeight: '700',
    fontSize: 16,
    marginBottom: 5,
  },
  description: {
    color: theme.colors.textSecondary,
    marginBottom: 8,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontWeight: '700',
  },
});

const formatCount = (num) => {
  if (num < 1000) return num;
  return `${(num / 1000).toFixed(1)}k`;
};

const RepositoryItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.upperRow}>
        <Image
          style={styles.avatar}
          source={{ uri: item.ownerAvatarUrl }}
        />

        <View style={{ flex: 1 }}>
          <Text style={styles.name}>{item.fullName}</Text>
          <Text style={styles.description}>{item.description}</Text>
          <Text style={styles.languageTag}>{item.language}</Text>
        </View>
      </View>

      <View style={styles.statsRow}>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>{formatCount(item.stargazersCount)}</Text>
          <Text>Stars</Text>
        </View>

        <View style={styles.statItem}>
          <Text style={styles.statNumber}>{formatCount(item.forksCount)}</Text>
          <Text>Forks</Text>
        </View>

        <View style={styles.statItem}>
          <Text style={styles.statNumber}>{item.reviewCount}</Text>
          <Text>Reviews</Text>
        </View>

        <View style={styles.statItem}>
          <Text style={styles.statNumber}>{item.ratingAverage}</Text>
          <Text>Rating</Text>
        </View>
      </View>
    </View>
  );
};

export default RepositoryItem;
