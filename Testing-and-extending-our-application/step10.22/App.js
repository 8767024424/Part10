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

// Formik + Yup
import { Formik } from "formik";
import * as Yup from "yup";

const Tab = createBottomTabNavigator();

// --------------------------------------
// TEMPORARY REVIEW STORAGE
// --------------------------------------
let REVIEWS = [];

// --------------------------------------
// SIGN IN SCREEN
// --------------------------------------
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

// --------------------------------------
// SIGN UP SCREEN (WITH VALIDATION)
// --------------------------------------
function SignUpScreen({ navigation }) {
  // Yup validation schema
  const SignUpSchema = Yup.object().shape({
    username: Yup.string()
      .min(5, "Username must be at least 5 characters")
      .max(30, "Username cannot be more than 30 characters")
      .required("Username is required"),

    password: Yup.string()
      .min(5, "Password must be at least 5 characters")
      .max(50, "Password cannot be more than 50 characters")
      .required("Password is required"),

    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Please confirm your password"),
  });

  return (
    <Formik
      initialValues={{
        username: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={SignUpSchema}
      onSubmit={(values) => {
        alert("Account created successfully!");
        navigation.navigate("Sign In");
      }}
    >
      {({
        handleChange,
        handleSubmit,
        handleBlur,
        values,
        errors,
        touched,
      }) => (
        <View style={styles.container}>
          <Text style={styles.header}>Sign Up</Text>

          {/* USERNAME */}
          <TextInput
            placeholder="Username"
            style={styles.input}
            value={values.username}
            onChangeText={handleChange("username")}
            onBlur={handleBlur("username")}
          />
          {touched.username && errors.username && (
            <Text style={styles.error}>{errors.username}</Text>
          )}

          {/* PASSWORD */}
          <TextInput
            placeholder="Password"
            secureTextEntry
            style={styles.input}
            value={values.password}
            onChangeText={handleChange("password")}
            onBlur={handleBlur("password")}
          />
          {touched.password && errors.password && (
            <Text style={styles.error}>{errors.password}</Text>
          )}

          {/* CONFIRM PASSWORD */}
          <TextInput
            placeholder="Confirm Password"
            secureTextEntry
            style={styles.input}
            value={values.confirmPassword}
            onChangeText={handleChange("confirmPassword")}
            onBlur={handleBlur("confirmPassword")}
          />
          {touched.confirmPassword && errors.confirmPassword && (
            <Text style={styles.error}>{errors.confirmPassword}</Text>
          )}

          <Button title="Create Account" onPress={handleSubmit} />
        </View>
      )}
    </Formik>
  );
}

// --------------------------------------
// REPOSITORIES SCREEN
// --------------------------------------
function RepositoriesScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Repositories</Text>

      <Text>• React Native Course Repo</Text>
      <Text>• Full Stack Open Repo</Text>

      <Button
        title="Create Review"
        onPress={() => navigation.navigate("Create Review")}
      />
    </View>
  );
}

// --------------------------------------
// CREATE REVIEW SCREEN
// --------------------------------------
function CreateReviewScreen({ navigation }) {
  const [owner, setOwner] = useState("");
  const [repo, setRepo] = useState("");
  const [rating, setRating] = useState("");
  const [text, setText] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Create Review</Text>

      <TextInput
        placeholder="Owner name"
        style={styles.input}
        value={owner}
        onChangeText={setOwner}
      />
      <TextInput
        placeholder="Repository name"
        style={styles.input}
        value={repo}
        onChangeText={setRepo}
      />
      <TextInput
        placeholder="Rating (0–100)"
        style={styles.input}
        value={rating}
        keyboardType="numeric"
        onChangeText={setRating}
      />
      <TextInput
        placeholder="Review text"
        style={styles.input}
        value={text}
        onChangeText={setText}
      />

      <Button
        title="Submit Review"
        onPress={() => {
          REVIEWS.unshift({
            id: Date.now().toString(),
            owner,
            repo,
            rating,
            text,
          });

          alert("Review added!");
          navigation.navigate("My Reviews");
        }}
      />
    </View>
  );
}

// --------------------------------------
// MY REVIEWS SCREEN
// --------------------------------------
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

// --------------------------------------
// SIGN OUT SCREEN
// --------------------------------------
function SignOutScreen({ navigation, route }) {
  const setLoggedIn = route.params?.setLoggedIn;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Sign Out</Text>

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

// --------------------------------------
// ROOT APP COMPONENT
// --------------------------------------
export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        {!loggedIn ? (
          <>
            <Tab.Screen
              name="Sign In"
              component={SignInScreen}
              initialParams={{ setLoggedIn }}
            />
            <Tab.Screen name="Sign Up" component={SignUpScreen} />
          </>
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

// --------------------------------------
// STYLES
// --------------------------------------
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 25,
  },
  input: {
    padding: 12,
    borderWidth: 1,
    backgroundColor: "white",
    borderRadius: 6,
    marginVertical: 8,
  },
  error: {
    color: "red",
    marginBottom: 10,
  },
  reviewBox: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: 15,
  },
});
