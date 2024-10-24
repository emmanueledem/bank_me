import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import COLORS from "../constants/app_colors";

const BusyButton = ({ text, onPress, isActive = false }) => {
  return (
    <TouchableOpacity
      disabled={isActive}
      onPress={onPress}
      style={styles.btnStyle}
    >
      <Text style={styles.btnTexStyle}> {text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnStyle: {
    backgroundColor: COLORS.primary,
    borderRadius: 5,
    height: 50,
    alignItems: "center",

    justifyContent: "center",
  },

  btnTexStyle: {
    color: COLORS.white,
    fontSize: 15,
    fontFamily: "Karla-Bold",
    fontWeight: "bold",
  },
});

export default BusyButton;
