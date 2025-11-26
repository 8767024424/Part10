import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 22, fontWeight: "700", marginBottom: 10 },
  text: { fontSize: 16, marginTop: 5 },
});

export default function Profile() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Profile</Text>
      <Text style={styles.text}>Name: Nandini Mane</Text>
      <Text style={styles.text}>Email: nandini@example.com</Text>
      <Text style={styles.text}>Member Since: 2023</Text>
    </View>
  );
}
