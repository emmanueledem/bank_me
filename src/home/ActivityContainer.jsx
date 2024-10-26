import { View, Text, Image } from "react-native";
import React from "react";
import COLORS from "../../constants/app_colors";
import ICONS from "../../constants/app_icons";
import { SvgXml } from "react-native-svg";

const ActivityContainer = ({ text, image }) => {
  return (
    <View
      style={{
        borderColor: COLORS.gray5,
        marginBottom: 20,
        borderRadius: 8,
        borderWidth: 1,
      }}
    >
      <View
        style={{
          paddingHorizontal: 24,
          paddingVertical: 12,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Image source={image} />
          <Text
            style={{
              paddingLeft: 24,
              color: COLORS.shinyBlack,
              fontSize: 15,
              fontFamily: "Karla-Light",
              fontWeight: "light",
            }}
          >
            {text}
          </Text>
        </View>

        <View>
          <SvgXml
            xml={ICONS.arrowBack}
            color={COLORS.shinyBlack}
            width="20"
            height="20"
          />
        </View>
      </View>
    </View>
  );
};

export default ActivityContainer;
