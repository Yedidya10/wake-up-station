import "expo-dev-client";

import { Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, ScrollView, useColorScheme } from "react-native";

import * as WebBrowser from "expo-web-browser";

import RouteSearch from "./components/RouteSearch";

import { Container } from "./styles/wrapper";
import GoogleSign from "./components/GoogleSign";

import { ThemeProvider } from "styled-components/native";
import { lightTheme, darkTheme } from "./styles/themes";
import Directions from "./components/Directions";
import AlertSetting from "./components/AlertSetting";
import { useEffect, useState } from "react";

WebBrowser.maybeCompleteAuthSession();

interface User {
  name: string;
  email: string;
  picture: string;
}

export default function App() {
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<User | null>(null);

  const colorScheme = useColorScheme();
  const theme = colorScheme === "dark" ? darkTheme : lightTheme;

  // useEffect(() => {
  //   setToken("test");

  //   if (token) {
  //     console.log("token", token);
  //   }
  // }, []);

  // useEffect(() => {
  //   setUser({
  //     name: "test",
  //     email: "test",
  //     picture: "test",
  //   });

  //   if (user) {
  //     console.log("user", user);
  //   }
  // }, []);

  return (
    <ThemeProvider theme={theme}>
      {token && user ? (
        <ScrollView>
          <Container>
            <Text style={styles.text}>Welcome {user.name}</Text>
            <RouteSearch />
          </Container>
          <Directions token={token} />
          <AlertSetting />
        </ScrollView>
      ) : (
        <Container>
          <GoogleSign setToken={setToken} setUser={setUser} />
          <Text>Please sign in to continue</Text>
          <Text>
            To use google maps directions, you need to sign in with your google
            account
          </Text>
        </Container>
      )}
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
