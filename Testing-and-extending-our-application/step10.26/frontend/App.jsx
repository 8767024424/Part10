import React, { useState, useEffect } from "react";
import { NativeRouter, Routes, Route, Navigate, useNavigate } from "react-router-native";
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { View, Text, TextInput, Button, Alert, TouchableOpacity } from "react-native";

/* -----------------------------------
   Simple Token Memory Storage
----------------------------------- */
const tokenMemory = {
  token: null,
  set(t) {
    this.token = t;
  },
  clear() {
    this.token = null;
  },
};

/* -----------------------------------
   Apollo Client Setup
----------------------------------- */
const httpLink = createHttpLink({ uri: "https://your-api-endpoint.com/graphql" });

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: tokenMemory.token ? `Bearer ${tokenMemory.token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

/* -----------------------------------
   Sign-In Page
----------------------------------- */
function SignInPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignIn = () => {
    // Fake login
    if (username && password) {
      tokenMemory.set("FAKE_TOKEN_123");
      navigate("/reviews");
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 22, marginBottom: 20 }}>Sign In</Text>
      <TextInput
        value={username}
        onChangeText={setUsername}
        placeholder="Username"
        style={{ borderWidth: 1, marginBottom: 10, padding: 8 }}
      />
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        secureTextEntry
        style={{ borderWidth: 1, marginBottom: 20, padding: 8 }}
      />
      <Button title="Sign In" onPress={handleSignIn} />
    </View>
  );
}

/* -----------------------------------
   My Reviews Page
----------------------------------- */
function MyReviewsPage() {
  const navigate = useNavigate();

  const reviews = [
    { id: 1, repo: "openai/api", text: "Great repo!" },
    { id: 2, repo: "facebook/react", text: "Solid codebase." },
  ];

  const handleDelete = (id) => {
    Alert.alert("Delete Review", "Are you sure?", [
      { text: "Cancel", style: "cancel" },
      {
        text: "Delete",
        onPress: () => {
          console.log("Deleted review", id);
        },
        style: "destructive",
      },
    ]);
  };

  const signOut = () => {
    tokenMemory.clear();
    navigate("/signin");
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 22, marginBottom: 20 }}>My Reviews</Text>

      {reviews.map((r) => (
        <View key={r.id} style={{ marginBottom: 20, borderBottomWidth: 1, paddingBottom: 10 }}>
          <Text style={{ fontWeight: "bold" }}>{r.repo}</Text>
          <Text>{r.text}</Text>

          <TouchableOpacity
            onPress={() => navigate(`/repo/${encodeURIComponent(r.repo)}`)}
            style={{ marginTop: 8 }}
          >
            <Text style={{ color: "blue" }}>View Repository</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handleDelete(r.id)} style={{ marginTop: 8 }}>
            <Text style={{ color: "red" }}>Delete Review</Text>
          </TouchableOpacity>
        </View>
      ))}

      <Button title="Sign Out" onPress={signOut} />
    </View>
  );
}

/* -----------------------------------
   Repository View Page
----------------------------------- */
function RepoPage({ repoId }) {
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 20 }}>Repository:</Text>
      <Text style={{ fontSize: 16 }}>{repoId}</Text>
    </View>
  );
}

function RepoWrapper() {
  const path = window.location.pathname;
  const repo = decodeURIComponent(path.replace("/repo/", ""));
  return <RepoPage repoId={repo} />;
}

/* -----------------------------------
   App with Routing
----------------------------------- */
export default function App() {
  return (
    <ApolloProvider client={client}>
      <NativeRouter>
        <Routes>
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/reviews" element={<MyReviewsPage />} />
          <Route path="/repo/:id" element={<RepoWrapper />} />
          <Route path="*" element={<Navigate to="/signin" replace />} />
        </Routes>
      </NativeRouter>
    </ApolloProvider>
  );
}
