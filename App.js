import "react-native-gesture-handler";
//libraries
import React from "react";
import { NativeBaseProvider } from "native-base";

//styles
import { ThemeProvider } from "styled-components";

//Navigation
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./components/Navigation/index";

const theme = {
  mainColor: "#293241",
  backgroundColor: "#b7b7a4",
  pink: "#f283a2",
  red: "red",
  white: "#fff",
  blue: "#90d4ed",
};

import { LogBox } from "react-native";
LogBox.ignoreLogs(["Warning: ..."]); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications

export default function App() {
  return (
    <NativeBaseProvider>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </ThemeProvider>
    </NativeBaseProvider>
  );
}
