import { View, Text, StyleSheet, FlatList } from "react-native";
import { repositories } from "../data/repositories";

const styles = StyleSheet.create({
  container: { padding: 15 },
  card: {
    backgroundColor: "#fff",
    padding: 15,
    marginBottom: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  title: { fontSize: 18, fontWeight: "700" },
  owner: { fontSize: 14, color: "#555" },
  rating: {
    marginTop: 6,
    fontSize: 14,
    fontWeight: "bold",
    color: "#1e90ff",
  },
  desc: { marginTop: 8, fontSize: 14 },
});

export default function Repositories() {
  return (
    <FlatList
      data={repositories}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.container}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Text style={styles.title}>{item.name}</Text>
          <Text style={styles.owner}>Owner: {item.owner}</Text>
          <Text style={styles.rating}>⭐ Rating: {item.rating}</Text>
          <Text style={styles.desc}>{item.description}</Text>
        </View>
      )}
    />
  );
}
