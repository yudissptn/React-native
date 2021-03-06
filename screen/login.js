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
  StatusBar,
  ToastAndroid
} from "react-native";

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions
} from "react-native/Libraries/NewAppScreen";

import Tombol from "./tombol";

const Login = () => {
  return (
    <View style={styles.margin}>
      <Text>Hello</Text>
      <View style={{ marginTop: 10 }}>
        <Button
          title={"Push"}
          onPress={() => ToastAndroid.show("halooow", ToastAndroid.SHORT)}
        />
      </View>
      <Tombol warna={"grey"} />
    </View>
  );
};

const styles = StyleSheet.create({
  margin: {
    margin: 20
  }
});

export default Login;
