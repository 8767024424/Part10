import { View, StyleSheet } from 'react-native';
import Text from './Text';

const styles = StyleSheet.create({
  container: {
    padding: 15,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 5,
  },
  description: {
    fontSize: 16,
    color: '#555',
  },
});

const repositories = [
  {
    id: '1',
    fullName: 'johndoe/awesome-project',
    description: 'React Native repository example'
  },
  {
    id: '2',
    fullName: 'coder123/my-app',
    description: 'Demo mobile application'
  },
  {
    id: '3',
    fullName: 'androiddev/react-native-ui',
    description: 'UI components for mobile'
  }
];

const RepositoryList = () => {
  return (
    <View>
      {repositories.map(repo => (
        <View style={styles.container} key={repo.id}>
          <Text style={styles.name}>{repo.fullName}</Text>
          <Text style={styles.description}>{repo.description}</Text>
        </View>
      ))}
    </View>
  );
};

export default RepositoryList;
