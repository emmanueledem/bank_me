import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import COLORS from "../../constants/app_colors";
import ICONS from "../../constants/app_icons";
import { SvgXml } from "react-native-svg";
import Divider from "./Divider";
import NoificationBody from "./NoificationBody";
import { TouchableOpacity } from "react-native";

const Notification = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View
        style={{
          flexDirection: "row",
          marginTop: 16,
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <SvgXml xml={ICONS.ArrowBackRight} width="50" height="40" />
        </TouchableOpacity>

        <Text
          style={{
            fontFamily: "Karla-Bold",
            fontWeight: "bold",
            fontSize: 17,
            color: COLORS.shinyBlack,
          }}
        >
          Notification
        </Text>
      </View>
      <View style={{ padding: 16, flex: 1 }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text
            style={{
              fontSize: 14,
              fontFamily: "Karla-Light",
              fontWeight: "light",
              color: COLORS.shinyBlack,
              marginBottom: 15,
            }}
          >
            Today
          </Text>
          <View
            style={{
              borderRadius: 8,
              borderWidth: 1,
              borderColor: COLORS.gray5,
              padding: 20,
            }}
          >
            <NoificationBody
              icon={ICONS.withdrawIcon}
              title={"Withdrew N5,000"}
              time={"08:58 PM"}
            />
            <Divider />
            <NoificationBody
              icon={ICONS.recievedIcon}
              title={"Received money N2,000 from Dito"}
              time={"08:40 PM"}
            />
            <Divider />
            <NoificationBody
              icon={ICONS.withdrawIcon}
              title={"Withdrew N40,000 from emergency funds"}
              time={"08:20 AM"}
            />
            <Divider />
            <NoificationBody
              icon={ICONS.recievedIcon}
              title={"Added N4,400 to your savings"}
              time={"06:58 AM"}
            />
          </View>
          <View style={{ paddingVertical: 20 }} />
          <Text
            style={{
              fontSize: 14,
              fontFamily: "Karla-Light",
              fontWeight: "light",
              color: COLORS.shinyBlack,
              marginBottom: 15,
            }}
          >
            Yesterday
          </Text>
          <View
            style={{
              borderRadius: 8,
              borderWidth: 1,
              borderColor: COLORS.gray5,
              padding: 20,
            }}
          >
            <NoificationBody
              icon={ICONS.withdrawIcon}
              title={"Withdrew N3,900"}
              time={"08:58 PM"}
            />

            <Divider />
            <NoificationBody
              icon={ICONS.recievedIcon}
              title={"Received cashback N5 on interest  "}
              time={"08:20 AM"}
            />
            <Divider />
            <NoificationBody
              icon={ICONS.withdrawIcon}
              title={"Withdrew N3200"}
              time={"06:58 AM"}
            />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Notification;
