import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 22, fontWeight: "bold" },
  text: { fontSize: 16, marginTop: 10 },
});

export default function About() {
  return (
    <View style={styles.container}>
      <Text className={styles.title}>About This App</Text>
      <Text style={styles.text}>
        This is a React Native app built for learning FullStack Open.  
        It includes routing, forms, UI components, and state management.
      </Text>
    </View>
  );
}
