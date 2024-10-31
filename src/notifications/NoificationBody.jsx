import { View, Text } from "react-native";
import React from "react";
import { SvgXml } from "react-native-svg";
import ICONS from "../../constants/app_icons";
import COLORS from "../../constants/app_colors";

const NoificationBody = ({ icon, title, time }) => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <SvgXml xml={icon} width="30" height="30" />
      <View style={{ paddingHorizontal: 21 }} />
      <View style={{ flexShrink: 1 }}>
        <Text
          style={{
            fontSize: 14,
            fontWeight: "Bold",
            color: COLORS.shinyBlack,
            fontFamily: "Karla-Bold",
          }}
        >
          {title}
        </Text>

        <View style={{ paddingVertical: 6 }} />
        <Text
          style={{
            fontSize: 12,
            fontWeight: "light",
            color: COLORS.gray6,
            fontFamily: "Karla-Light",
          }}
        >
          {time}
        </Text>
      </View>
    </View>
  );
};

export default NoificationBody;
