import { View, StyleSheet } from 'react-native';
import { Link } from 'react-router-native';
import Text from './Text';

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingBottom: 15,
    backgroundColor: '#24292e',
    flexDirection: 'row',
    paddingHorizontal: 20,
    gap: 30,
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <Link to="/">
        <Text style={styles.text}>Repositories</Text>
      </Link>

      <Link to="/signin">
        <Text style={styles.text}>Sign in</Text>
      </Link>
    </View>
  );
};

export default AppBar;
