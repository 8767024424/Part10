import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 22, fontWeight: "bold" },
  text: { fontSize: 16, marginTop: 10 },
});

export default function Contact() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact Us</Text>
      <Text style={styles.text}>📧 Email: support@example.com</Text>
      <Text style={styles.text}>📞 Phone: +91 98765 43210</Text>
      <Text style={styles.text}>📍 Location: India</Text>
    </View>
  );
}
