import { View, Text, SafeAreaView, Dimensions } from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { SvgXml } from "react-native-svg";
import ICONS from "../../constants/app_icons";
import { StyleSheet } from "react-native";
import COLORS from "../../constants/app_colors";
import RNScreenKeyboard from "rn-screen-keyboard";
import BusyButton from "../../components/BusyButton";
let screenHeight = Dimensions.get("window").height;

const SaveMoney = ({ navigation }) => {
  const [value, setValue] = useState("");

  const handleKeyPress = (data) => {
    setValue(data);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={{ paddingTop: 16 }} />
      <View style={styles.bodyStyle}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <SvgXml xml={ICONS.close} width="20" height="20" />
        </TouchableOpacity>
        <View style={{ alignItems: "center", paddingTop: 57 }}>
          <Text
            style={{
              fontSize: 30,
              fontFamily: "Karla-Light",
              fontWeight: "light",
              color: COLORS.shinyBlack,
            }}
          >
            Let’s help you save
          </Text>
          <View style={{ paddingTop: 16 }} />
          <Text
            style={{
              fontSize: 17,
              fontFamily: "Karla-Light",
              fontWeight: "light",
              color: COLORS.shinyBlack,
            }}
          >
            Enter the amount you want to save
          </Text>
        </View>
        <View style={{ paddingTop: 60 }} />
        {value == "" ? (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <SvgXml xml={ICONS.nairaSymbol} width="42" height="34" />
            <Text
              style={{
                fontSize: 42,
                color: COLORS.primary,
                fontFamily: "Karla-Regular",
                fontWeight: "regular",
                textAlign: "center",
              }}
            >
              0.00
            </Text>
          </View>
        ) : (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <SvgXml xml={ICONS.nairaSymbol} width="42" height="34" />
            <Text
              style={{
                fontSize: 42,
                color: COLORS.primary,
                fontFamily: "Karla-Regular",
                fontWeight: "regular",
                textAlign: "center",
              }}
            >
              {value}
            </Text>
          </View>
        )}
        <View style={{ paddingTop: 20 }} />
        <RNScreenKeyboard
          value={value}
          onKeyPress={handleKeyPress}
          // Optional props for customization
          textStyle={{
            fontSize: 42,
            color: COLORS.shinyBlack,
            fontFamily: "Karla-Regular",
            fontWeight: "regular",
            textAlign: "center",
          }}
          rowStyle={{ justifyContent: "space-around" }}
          cellStyle={{ backgroundColor: COLORS.white }}
          BackSpaceComponent={
            <SvgXml xml={ICONS.deleteItem} width="42" height="42" />
          } // Custom Backspace component
          footerStyle={{
            justifyContent: "space-around",
            alignItems: "center",
            paddingLeft: 45,
          }}
          Left={
            <Text
              style={{
                backgroundColor: COLORS.white,
                fontSize: 42,

                paddingHorizontal: 5,
                color: COLORS.shinyBlack,
                fontFamily: "Karla-Regular",
                fontWeight: "regular",
                textAlign: "center",
              }}
            >
              .
            </Text>
          } // Custom left footer button
          // Custom right footer button
        />
        <View style={{ paddingTop: screenHeight / 15 }} />
        <BusyButton onPress={() => {}} text={"CONTINUE"} />
      </View>
    </SafeAreaView>
  );
};

export default SaveMoney;

const styles = StyleSheet.create({
  bodyStyle: {
    paddingHorizontal: 16,
  },
});
