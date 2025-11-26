import React from 'react';
import { View, Text, Button, Linking, StyleSheet } from 'react-native';

const RepositoryItem = ({ repository, showGitHubButton }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{repository.fullName}</Text>
      {showGitHubButton && <Button title="Open in GitHub" onPress={() => Linking.openURL(repository.url)} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 10, margin: 5, borderWidth: 1, borderColor: '#ccc', borderRadius: 5 },
  name: { fontWeight: 'bold' },
});

export default RepositoryItem;
