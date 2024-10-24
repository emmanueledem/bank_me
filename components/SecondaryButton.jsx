import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import COLORS from "../constants/app_colors";

const SecondaryButton = ({ text, onPress, isActive = false }) => {
  return (
    <TouchableOpacity style={styles.btnStyle}>
      <Text style={styles.btnTexStyle}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnStyle: {
    backgroundColor: COLORS.white,
    borderRadius: 5,
    marginTop: 15,
    borderColor: COLORS.gray1,
    borderWidth: 1,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },

  btnTexStyle: {
    color: COLORS.shinyBlack,
    fontSize: 15,
    fontFamily: "Karla-Bold",
    fontWeight: "bold",
  },
});

export default SecondaryButton;
