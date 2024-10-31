import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import COLORS from "../../constants/app_colors";
import { TouchableOpacity } from "react-native";
import { SvgXml } from "react-native-svg";
import ICONS from "../../constants/app_icons";
import { ScrollView } from "react-native";
import { Image } from "react-native";
import BusyButton from "../../components/BusyButton";

const InviteFriend = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={{ paddingHorizontal: 16, flex: 1 }}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={{ paddingTop: 16 }}
        >
          <SvgXml xml={ICONS.close} width="20" height="20" />
        </TouchableOpacity>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flexGrow: 1, paddingBottom: 16 }}
        >
          <Image
            style={{
              justifyContent: "center",
              alignContent: "center",
              alignSelf: "center",
              marginTop: 58,
              marginBottom: 50,
            }}
            source={require("../../assets/images/invite_friend.png")}
          />
          <Text
            style={{
              textAlign: "center",
              fontFamily: "Karla-Medium",
              fontSize: 30,
              fontWeight: "medium",
              marginBottom: 22,
            }}
          >
            Get Free N1,000
          </Text>
          <Text
            style={{
              textAlign: "center",
              fontFamily: "Karla-Light",
              fontSize: 15,
              fontWeight: "light",
              marginBottom: 101,
            }}
          >
            You and your friends earn cash reward when they signup and save with
            your referral link or code.
          </Text>
          <Text
            style={{
              textAlign: "left",
              fontFamily: "Karla-Regular",
              fontSize: 17,
              fontWeight: "regular",
              marginBottom: 24,
            }}
          >
            Here’s your referral code
          </Text>
          <View style={{ flexDirection: "row" }}>
            <View style={[styles.referallCodeStyle, { flex: 1.5 }]}>
              <Text style={{ color: COLORS.primary }}>JOSEPH123</Text>
              <SvgXml xml={ICONS.copyIcon} width="20" height="20" />
            </View>
            <View style={{ paddingHorizontal: 4 }} />
            <View style={{ flex: 1 }}>
              <BusyButton onPress={() => {}} text={"INVITE"} />
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  referallCodeStyle: {
    backgroundColor: COLORS.gray5,
    flexDirection: "row",
    paddingVertical: 14,
    borderRadius: 8,
    paddingHorizontal: 16,
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default InviteFriend;
