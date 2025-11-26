// app/_layout.jsx
import React from "react";
import { Stack } from "expo-router";
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

/**
 * Simple in-memory token store (exported so pages can use it)
 */
export const tokenMemory = {
  token: null,
  set(t) { this.token = t; },
  clear() { this.token = null; }
};

/* Apollo Client (placeholder - change URI to your GraphQL endpoint if needed) */
const httpLink = createHttpLink({ uri: "https://example.com/graphql" });
const authLink = setContext((_, { headers }) => ({
  headers: { ...headers, authorization: tokenMemory.token ? `Bearer ${tokenMemory.token}` : "" }
}));
const client = new ApolloClient({ link: authLink.concat(httpLink), cache: new InMemoryCache() });

export default function RootLayout() {
  return (
    <ApolloProvider client={client}>
      <Stack screenOptions={{ headerShown: true }} />
    </ApolloProvider>
  );
}
