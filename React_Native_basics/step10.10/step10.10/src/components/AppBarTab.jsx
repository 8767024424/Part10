import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';
import { Link } from 'react-router-native';

const styles = StyleSheet.create({
  tab: {
    marginRight: 15,
    paddingVertical: 12,
  },
  text: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
});

const AppBarTab = ({ label, to }) => {
  return (
    <Link to={to} component={Pressable} style={styles.tab}>
      <Text style={styles.text}>{label}</Text>
    </Link>
  );
};

export default AppBarTab;
