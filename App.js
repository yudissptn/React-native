/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment } from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  StatusBar
} from "react-native";

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions
} from "react-native/Libraries/NewAppScreen";

import Login from "./screen/login";

const App = () => {
  return (
    <View style={styles.background}>
      <Login />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1
  }
});

export default App;
