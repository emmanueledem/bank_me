import { View, Text, TextInput } from "react-native";
import React from "react";
import COLORS from "../constants/app_colors";

const InputField = ({
  placeholder,
  keyboardType = "text",
  secureTextEntry,
  onchangeText,
  value,
}) => {
  return (
    <View style={{ paddingBottom: 10 }}>
      <TextInput
        placeholderTextColor={COLORS.gray2}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        style={{
          height: 50,
          padding: 16,
          borderColor: COLORS.gray,
          borderWidth: 1,
          borderRadius: 5,
          fontFamily: "Karla-Regular",
        }}
        onChangeText={onchangeText}
        value={value}
      />
    </View>
  );
};

export default InputField;
