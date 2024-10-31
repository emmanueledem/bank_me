import { View, Text } from "react-native";
import React from "react";
import COLORS from "../../constants/app_colors";

const Divider = () => {
  return (
    <View
      style={{ borderWidth: 1, marginVertical: 19, borderColor: COLORS.gray7 }}
    />
  );
};

export default Divider;
