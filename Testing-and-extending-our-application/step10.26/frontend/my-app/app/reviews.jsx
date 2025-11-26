// app/reviews.jsx
import React, { useState } from "react";
import { View, Text, TextInput, Button, FlatList, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import { useReviewStore } from "./reviewStore";
import { tokenMemory } from "./_layout";

export default function Reviews() {
  const { reviews, setReviews } = useReviewStore();
  const [newRepo, setNewRepo] = useState("");
  const [newText, setNewText] = useState("");

  const createReview = () => {
    if (!newRepo.trim() || !newText.trim()) return;
    const item = { id: Date.now(), repo: newRepo.trim(), text: newText.trim() };
    setReviews([item, ...reviews]);
    setNewRepo("");
    setNewText("");
  };

  const deleteReview = (id) => {
    setReviews(reviews.filter(r => r.id !== id));
  };

  const signOut = () => {
    tokenMemory.clear();
    router.replace("/");
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 26, marginBottom: 12 }}>My Reviews</Text>

      {/* Create review */}
      <Text style={{ fontSize: 16, marginBottom: 6 }}>Create New Review</Text>
      <TextInput
        placeholder="Repository name (e.g. openai/api)"
        value={newRepo}
        onChangeText={setNewRepo}
        style={{ borderWidth: 1, padding: 8, marginBottom: 8 }}
      />
      <TextInput
        placeholder="Review text"
        value={newText}
        onChangeText={setNewText}
        style={{ borderWidth: 1, padding: 8, marginBottom: 8 }}
      />
      <Button title="Create Review" onPress={createReview} />

      <View style={{ height: 18 }} />

      {/* Reviews list */}
      {reviews.length === 0 ? (
        <Text style={{ opacity: 0.6 }}>No reviews yet.</Text>
      ) : (
        <FlatList
          data={reviews}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={{ padding: 12, marginBottom: 12, borderWidth: 1, borderRadius: 8 }}>
              <Text style={{ fontWeight: "bold" }}>{item.repo}</Text>
              <Text style={{ marginVertical: 6 }}>{item.text}</Text>

              <View style={{ flexDirection: "row", gap: 8 }}>
                <TouchableOpacity
                  onPress={() => router.push(`/repo/${encodeURIComponent(item.repo)}`)}
                  style={{ paddingVertical: 8, paddingHorizontal: 12, backgroundColor: "#007bff", borderRadius: 6 }}
                >
                  <Text style={{ color: "white" }}>View Repository</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => deleteReview(item.id)}
                  style={{ paddingVertical: 8, paddingHorizontal: 12, backgroundColor: "#d9534f", borderRadius: 6 }}
                >
                  <Text style={{ color: "white" }}>Delete Review</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      )}

      <View style={{ height: 8 }} />
      <Button title="Sign Out" onPress={signOut} />
    </View>
  );
}
