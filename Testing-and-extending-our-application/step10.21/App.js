import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  ScrollView,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

// 🔵 Store reviews locally (temporary)
let REVIEWS = [];

// -----------------------------------------
// SIGN IN SCREEN
// -----------------------------------------
function SignInScreen({ navigation, route }) {
  const setLoggedIn = route.params?.setLoggedIn;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Sign In</Text>

      <TextInput placeholder="Username" style={styles.input} />
      <TextInput placeholder="Password" secureTextEntry style={styles.input} />

      <Button
        title="Sign In"
        onPress={() => {
          setLoggedIn(true);
          navigation.navigate("Repositories");
        }}
      />
    </View>
  );
}

// -----------------------------------------
// REPOSITORY LIST SCREEN
// -----------------------------------------
function RepositoriesScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Repositories</Text>

      <Text>• React Native Repo</Text>
      <Text>• FullStackOpen Repo</Text>

      <Button
        title="Create Review"
        onPress={() => navigation.navigate("Create Review")}
      />
    </View>
  );
}

// -----------------------------------------
// CREATE REVIEW SCREEN
// -----------------------------------------
function CreateReviewScreen({ navigation }) {
  const [owner, setOwner] = useState("");
  const [repo, setRepo] = useState("");
  const [rating, setRating] = useState("");
  const [text, setText] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Create Review</Text>

      <TextInput
        placeholder="Repository Owner"
        value={owner}
        onChangeText={setOwner}
        style={styles.input}
      />

      <TextInput
        placeholder="Repository Name"
        value={repo}
        onChangeText={setRepo}
        style={styles.input}
      />

      <TextInput
        placeholder="Rating 0–100"
        value={rating}
        onChangeText={setRating}
        keyboardType="numeric"
        style={styles.input}
      />

      <TextInput
        placeholder="Review Text"
        value={text}
        onChangeText={setText}
        style={styles.input}
      />

      <Button
        title="Submit Review"
        onPress={() => {
          REVIEWS.unshift({
            owner,
            repo,
            rating,
            text,
            id: Date.now().toString(),
          });

          alert("Review Added!");
          navigation.navigate("My Reviews");
        }}
      />
    </View>
  );
}

// -----------------------------------------
// MY REVIEWS SCREEN
// -----------------------------------------
function MyReviewsScreen() {
  return (
    <ScrollView style={{ padding: 20 }}>
      <Text style={styles.header}>My Reviews</Text>

      {REVIEWS.length === 0 ? (
        <Text>No reviews yet</Text>
      ) : (
        REVIEWS.map((r) => (
          <View key={r.id} style={styles.reviewBox}>
            <Text style={{ fontWeight: "bold" }}>
              {r.owner}/{r.repo}
            </Text>
            <Text>Rating: {r.rating}</Text>
            <Text>{r.text}</Text>
          </View>
        ))
      )}
    </ScrollView>
  );
}

// -----------------------------------------
// SIGN OUT SCREEN
// -----------------------------------------
function SignOutScreen({ navigation, route }) {
  const setLoggedIn = route.params?.setLoggedIn;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Are you sure?</Text>

      <Button
        title="Sign Out"
        onPress={() => {
          setLoggedIn(false);
          navigation.navigate("Sign In");
        }}
      />
    </View>
  );
}

// -----------------------------------------
// APP ROOT
// -----------------------------------------
export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        {!loggedIn ? (
          <Tab.Screen
            name="Sign In"
            component={SignInScreen}
            initialParams={{ setLoggedIn }}
          />
        ) : (
          <>
            <Tab.Screen name="Repositories" component={RepositoriesScreen} />
            <Tab.Screen name="Create Review" component={CreateReviewScreen} />
            <Tab.Screen name="My Reviews" component={MyReviewsScreen} />
            <Tab.Screen
              name="Sign Out"
              component={SignOutScreen}
              initialParams={{ setLoggedIn }}
            />
          </>
        )}
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// -----------------------------------------
// STYLES
// -----------------------------------------
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  header: {
    fontSize: 28,
    textAlign: "center",
    marginBottom: 25,
    fontWeight: "bold",
  },
  input: {
    padding: 12,
    borderWidth: 1,
    borderRadius: 6,
    marginVertical: 8,
    backgroundColor: "white",
  },
  reviewBox: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    borderWidth: 1,
  },
});
