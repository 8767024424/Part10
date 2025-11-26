import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Alert, // Use Alert for a proper error message substitute
} from 'react-native';

// Sample data to populate the card
const repositoryData = {
  owner: 'jaredpalmer',
  name: 'formik',
  description: 'Build forms in React, without the tears 😥',
  tag: 'TypeScript',
  stars: '21.9k',
  forks: '1.6k',
  reviews: '3',
  rating: '88',
  // Using a representative image URL for the avatar
  avatarUrl: 'https://avatars.githubusercontent.com/u/1400272?v=4',
};

// Component for the Repository Stats (Stars, Forks, etc.)
const StatItem = ({ count, label }) => (
  <View style={styles.statItem}>
    <Text style={styles.statCount}>{count}</Text>
    <Text style={styles.statLabel}>{label}</Text>
  </View>
);

// Component for the main Repository Card
const RepositoryCard = ({ data }) => {
  const handleOpenGithub = () => {
    // Using Alert as a non-breaking substitute for a real alert/console message
    Alert.alert(
      "GitHub Link",
      `Pretending to open link for ${data.owner}/${data.name}`,
      [{ text: "OK" }]
    );
  };

  return (
    <View style={styles.card}>
      {/* Repository Header (Avatar, Name, Description) */}
      <View style={styles.repoHeader}>
        <Image
          source={{ uri: data.avatarUrl }}
          style={styles.avatar}
        />
        <View style={styles.repoInfo}>
          <Text style={styles.repoTitle}>
            {data.owner}
            <Text style={styles.repoTitleSlant}>/{data.name}</Text>
          </Text>
          {/* Note: Added the emoji from the original screenshot */}
          <Text style={styles.repoDescription}>{data.description}</Text>
        </View>
      </View>

      {/* Tag */}
      <View style={styles.tagContainer}>
        <Text style={styles.tagText}>{data.tag}</Text>
      </View>

      {/* Stats Row */}
      <View style={styles.statsRow}>
        <StatItem count={data.stars} label="Stars" />
        <StatItem count={data.forks} label="Forks" />
        <StatItem count={data.reviews} label="Reviews" />
        <StatItem count={data.rating} label="Rating" />
      </View>

      {/* Action Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={handleOpenGithub}
        activeOpacity={0.8}
      >
        <Text style={styles.buttonText}>Open in GitHub</Text>
      </TouchableOpacity>
    </View>
  );
};

// Main Component (must be the default export for Expo Router to use it)
export default function TabOneScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />

      {/* Top Navigation Bar */}
      <View style={styles.navBar}>
        <Text style={styles.navText}>Repositories</Text>
        <Text style={[styles.navText, { fontWeight: '700' }]}>Sign in</Text>
      </View>

      {/* Repository Card */}
      <View style={styles.content}>
        <RepositoryCard data={repositoryData} />
      </View>
    </SafeAreaView>
  );
}

// Styling
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    backgroundColor: '#f8f8f8',
  },
  navText: {
    fontSize: 16,
    color: '#333',
  },
  content: {
    flex: 1,
    // The background color from the screenshot is a light cyan/blue
    backgroundColor: '#e6f7ff',
    padding: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  repoHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 12,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  repoInfo: {
    flex: 1,
  },
  repoTitle: {
    fontSize: 18,
    fontWeight: '500',
    color: '#333',
  },
  repoTitleSlant: {
    fontWeight: '400',
    fontStyle: 'italic',
    color: '#666',
  },
  repoDescription: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  tagContainer: {
    alignSelf: 'flex-start',
    backgroundColor: '#3578e5',
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginBottom: 16,
  },
  tagText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 12,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  statItem: {
    alignItems: 'center',
  },
  statCount: {
    fontSize: 20,
    fontWeight: '700',
    color: '#333',
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
    marginTop: 2,
  },
  button: {
    backgroundColor: '#007aff',
    paddingVertical: 14,
    borderRadius: 6,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});