// app/repo/[id].jsx
import React from "react";
import { View, Text, Button, Alert } from "react-native";
import { useLocalSearchParams, router } from "expo-router";
import { reviewStore } from "../reviewStore";

export default function RepoPage() {
  const { id } = useLocalSearchParams(); // id is the repo string

  const deleteRepoEntry = () => {
    Alert.alert("Delete Repository Entry", `Delete "${id}" from your reviews?`, [
      { text: "Cancel", style: "cancel" },
      {
        text: "Delete",
        style: "destructive",
        onPress: () => {
          // filter out by repo name (exact match)
          const updated = (reviewStore.reviews || []).filter(r => r.repo !== id);
          // update store
          if (typeof reviewStore.setReviews === "function") {
            reviewStore.setReviews(updated);
          }
          // go back to reviews
          router.push("/reviews");
        }
      }
    ]);
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 22, marginBottom: 12 }}>Repository</Text>
      <Text style={{ fontSize: 18, marginBottom: 20 }}>{id}</Text>

      <Button title="Delete Repository Entry" color="#d9534f" onPress={deleteRepoEntry} />
    </View>
  );
}
