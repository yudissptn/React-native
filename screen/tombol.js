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
  ToastAndroid,
  TouchableOpacity,
  Dimensions
} from "react-native";

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions
} from "react-native/Libraries/NewAppScreen";

const { height, width } = Dimensions.get("screen") - 20;

const Tombol = ({ warna }) => {
  return (
    <View style={styles.margin}>
      <TouchableOpacity onPress={() => alert()}>
        <View style={styles.tombol}>
          <Text style={{ color: warna }}>Haloo lagi</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  margin: {
    margin: 20
  },
  tombol: {
    backgroundColor: "cyan",
    width: width,
    height: 40,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default Tombol;
