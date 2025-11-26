import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import React, { useState } from "react";

const styles = StyleSheet.create({
  container: { padding: 20 },
  label: { fontSize: 16, marginTop: 10 },
  input: {
    borderWidth: 1,
    borderColor: "#888",
    padding: 10,
    borderRadius: 6,
    marginTop: 5,
  },
});

export default function CreateReview() {
  const [repo, setRepo] = useState("");
  const [rating, setRating] = useState("");
  const [review, setReview] = useState("");

  const submit = () => {
    alert(`Review Submitted!\nRepo: ${repo}\nRating: ${rating}\nReview: ${review}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Repository Name</Text>
      <TextInput style={styles.input} value={repo} onChangeText={setRepo} />

      <Text style={styles.label}>Rating (1–100)</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={rating}
        onChangeText={setRating}
      />

      <Text style={styles.label}>Review Text</Text>
      <TextInput
        style={[styles.input, { height: 100 }]}
        multiline
        value={review}
        onChangeText={setReview}
      />

      <View style={{ marginTop: 20 }}>
        <Button title="Submit Review" onPress={submit} />
      </View>
    </View>
  );
}
