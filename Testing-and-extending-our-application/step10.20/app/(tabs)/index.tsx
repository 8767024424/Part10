import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Alert,
  FlatList, // New: Import FlatList
} from 'react-native';

// --- UTILITY: Simplified Date Formatting (simulates date-fns/format) ---
const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  // Format: day.month.year
  return `${day}.${month}.${year}`;
};

// --- MOCK DATA STRUCTURE (Simulating GraphQL response) ---
const repositoryWithReviews = {
  id: 'jaredpalmer.formik',
  fullName: 'jaredpalmer/formik',
  description: 'Build forms in React, without the tears 😥',
  tag: 'TypeScript',
  stars: '21.9k',
  forks: '1.6k',
  reviewsCount: '3',
  ratingAverage: '88',
  avatarUrl: 'https://avatars.githubusercontent.com/u/1400272?v=4',

  // Reviews data structure matching the GraphQL schema
  reviews: {
    edges: [
      {
        node: {
          id: 'r1',
          text: "I used Formik on a complex form project, and it saved us weeks. The documentation is excellent, and the performance is top-notch. Highly recommended for any serious React development.",
          rating: 95,
          createdAt: '2023-11-15T10:00:00Z',
          user: { id: 'u1', username: 'js_master' },
        },
      },
      {
        node: {
          id: 'r2',
          text: "Great library, but the learning curve for the newer versions felt a bit steep. Once you get past the initial setup, it's incredibly powerful.",
          rating: 78,
          createdAt: '2023-10-20T12:30:00Z',
          user: { id: 'u2', username: 'react_dev_girl' },
        },
      },
      {
        node: {
          id: 'r3',
          text: "The best solution for state management in forms. Simple, declarative, and handles validation beautifully.",
          rating: 100,
          createdAt: '2023-09-01T08:15:00Z',
          user: { id: 'u3', username: 'form_fanatic' },
        },
      },
    ],
  },
};

// --- Repository Info Component (List Header) ---

// Component for the Repository Stats (Stars, Forks, etc.)
const StatItem = ({ count, label }) => (
  <View style={styles.statItem}>
    <Text style={styles.statCount}>{count}</Text>
    <Text style={styles.statLabel}>{label}</Text>
  </View>
);

// The original RepositoryCard is renamed to RepositoryInfo
const RepositoryInfo = ({ repository }) => {
  const handleOpenGithub = () => {
    Alert.alert(
      "GitHub Link",
      `Pretending to open link for ${repository.fullName}`,
      [{ text: "OK" }]
    );
  };

  return (
    <View style={styles.repositoryInfoContainer}>
      <View style={styles.repoHeader}>
        <Image
          source={{ uri: repository.avatarUrl }}
          style={styles.avatar}
        />
        <View style={styles.repoInfo}>
          <Text style={styles.repoTitle}>
            {repository.owner}
            <Text style={styles.repoTitleSlant}>/{repository.name}</Text>
          </Text>
          <Text style={styles.repoDescription}>{repository.description}</Text>
        </View>
      </View>

      <View style={styles.tagContainer}>
        <Text style={styles.tagText}>{repository.tag}</Text>
      </View>

      <View style={styles.statsRow}>
        <StatItem count={repository.stars} label="Stars" />
        <StatItem count={repository.forks} label="Forks" />
        <StatItem count={repository.reviewsCount} label="Reviews" />
        <StatItem count={repository.ratingAverage} label="Rating" />
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={handleOpenGithub}
        activeOpacity={0.8}
      >
        <Text style={styles.buttonText}>Open in GitHub</Text>
      </TouchableOpacity>

      {/* Separator for the list header and the first review item */}
      <View style={styles.separator} />
    </View>
  );
};


// --- Review Item Component ---
const RATING_SIZE = 50; // Used for achieving the round shape

const ReviewItem = ({ review }) => (
  <View style={reviewStyles.container}>
    {/* Rating Circle */}
    <View style={reviewStyles.ratingContainer}>
      <Text style={reviewStyles.ratingText}>{review.rating}</Text>
    </View>

    {/* Review Info and Text */}
    <View style={reviewStyles.infoContainer}>
      <Text style={reviewStyles.username}>{review.user.username}</Text>
      <Text style={reviewStyles.date}>{formatDate(review.createdAt)}</Text>
      <Text style={reviewStyles.text}>{review.text}</Text>
    </View>
  </View>
);

// --- Main Component: SingleRepository ---

// Extract reviews from the mock data for the FlatList data prop
const reviews = repositoryWithReviews.reviews.edges.map(edge => edge.node);

export default function TabOneScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />

      {/* Top Navigation Bar */}
      <View style={styles.navBar}>
        <Text style={styles.navText}>Repositories</Text>
        <Text style={[styles.navText, { fontWeight: '700' }]}>Sign in</Text>
      </View>

      {/* FlatList for Repository Info (Header) and Reviews (Items) */}
      <FlatList
        data={reviews}
        renderItem={({ item }) => <ReviewItem review={item} />}
        keyExtractor={({ id }) => id}
        ListHeaderComponent={() => <RepositoryInfo repository={repositoryWithReviews} />}
        // Adds space between review items
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        style={styles.flatList}
        contentContainerStyle={styles.contentContainer}
      />
    </SafeAreaView>
  );
}

// --- STYLESHEETS ---

// Shared styles for the overall app structure and RepositoryInfo
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
  flatList: {
    backgroundColor: '#e6f7ff',
  },
  contentContainer: {
    paddingBottom: 16, // Padding at the bottom of the list
  },
  // Container wrapping the Repository Info inside the ListHeaderComponent
  repositoryInfoContainer: {
    backgroundColor: '#fff',
    padding: 16,
    // Add a slight shadow or border to separate it from the reviews below
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    marginBottom: 10,
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
    justifyContent: 'space-around',
    marginBottom: 20,
    paddingHorizontal: 10,
    // Using space-around for even distribution on the row
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
    marginBottom: 10, // Space below button before the reviews list starts
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  // Separator style for between list items
  separator: {
    height: 10,
    backgroundColor: '#e6f7ff',
  },
});

// Specific styles for the ReviewItem component
const reviewStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  ratingContainer: {
    width: RATING_SIZE,
    height: RATING_SIZE,
    borderRadius: RATING_SIZE / 2, // Makes it perfectly round
    borderColor: '#007aff',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
    flexShrink: 0, // Prevents the rating circle from shrinking
  },
  ratingText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#007aff',
  },
  infoContainer: {
    flex: 1,
  },
  username: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 2,
  },
  date: {
    color: '#666',
    fontSize: 14,
    marginBottom: 8,
  },
  text: {
    fontSize: 14,
    lineHeight: 20,
    color: '#333',
  },
});