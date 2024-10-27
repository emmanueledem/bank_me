import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";
import React from "react";
import COLORS from "../../constants/app_colors";
import { SvgXml } from "react-native-svg";
import ICONS from "../../constants/app_icons";
import ActivityContainer from "./ActivityContainer";
import { TouchableOpacity } from "react-native";
let screenHeight = Dimensions.get("window").height;

const bannerSlides = [
  {
    id: "1",
    title: "Total Savings",
    count: "N50,000.10",
  },
  {
    id: "2",
    title: "Total Transaction",
    count: "845",
  },
  {
    id: "3",
    title: "Total Referalls",
    count: "17,000",
  },
];

const Dashboard = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: 16,
            paddingTop: 16,
          }}
        >
          <View>
            <Text style={styles.helloUser}>Hello Joseph</Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={styles.welcomeText}>
                Good morning, remember to save today
              </Text>
              <Image
                source={require("../../assets/images/welcome_text_logo.png")}
              />
            </View>
          </View>
          <View>
            <Image source={require("../../assets/images/user_image.png")} />
          </View>
        </View>
        <View style={{ paddingTop: 16 }} />
        <View style={{ paddingHorizontal: 16 }}>
          <View style={styles.bannerContainer}>
            <Text style={styles.bannerTile}>Total Savings</Text>
            <Text style={styles.bannerAmount}>N50,000.10</Text>
          </View>
        </View>

        <View style={{ paddingTop: 16 }} />
        <View style={{ flexDirection: "row", alignSelf: "center" }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("SaveMoney");
            }}
          >
            <View style={styles.addMoneyContainer}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Image source={require("../../assets/images/addMoney.png")} />
                <View style={{ paddingHorizontal: 8 }} />
                <Text
                  style={{
                    fontSize: 17,
                    fontFamily: "Karla-Regular",
                    fontWeight: "light",
                    color: COLORS.gray5,
                  }}
                >
                  Add money
                </Text>
              </View>
            </View>
          </TouchableOpacity>

          <View
            style={{
              paddingHorizontal: 10,
            }}
          />
          <View style={styles.withdrawContainer}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Image
                source={require("../../assets/images/withdrawMoney.png")}
              />
              <View style={{ paddingHorizontal: 8 }} />
              <Text
                style={{
                  fontSize: 17,
                  fontFamily: "Karla-Regular",
                  fontWeight: "light",
                  color: COLORS.gray5,
                }}
              >
                Withdraw
              </Text>
            </View>
          </View>
        </View>
        <View style={{ paddingTop: 40 }} />
        <ScrollView keyboardShouldPersistTaps="handled">
          <View style={{ paddingHorizontal: 16 }}>
            <Text
              style={{
                color: COLORS.shinyBlack,
                fontFamily: "Karla-Bold",
                fontWeight: "bold",
                fontSize: 17,
              }}
            >
              Get your money working for you
            </Text>
            <View style={{ paddingTop: 20 }} />

            <ActivityContainer
              text={"Save for an emergency"}
              image={require("../../assets/images/save.png")}
            />
            <ActivityContainer
              text={"Invest your money"}
              image={require("../../assets/images/invest_money.png")}
            />
            <View style={{ paddingTop: 36 }} />
            <Text
              style={{
                color: COLORS.shinyBlack,
                fontFamily: "Karla-Bold",
                fontWeight: "bold",
                fontSize: 17,
              }}
            >
              Get your money working for you
            </Text>
            <View style={{ paddingTop: 20 }} />
            <ActivityContainer
              text={"Invite your friends and get a bonus"}
              image={require("../../assets/images/invite.png")}
            />
          </View>
        </ScrollView>
      </>
    </SafeAreaView>
  );
};

export default Dashboard;
styles = StyleSheet.create({
  helloUser: {
    fontFamily: "Karla-Bold",
    fontSize: 25,
    color: COLORS.shinyBlack,
  },

  welcomeText: {
    fontFamily: "Karla-Light",
    fontSize: 13,
    color: COLORS.shinyBlack,
  },

  bannerContainer: {
    paddingVertical: 27,
    alignItems: "center",
    borderRadius: 8,

    backgroundColor: COLORS.primary,
    height: 180,
    justifyContent: "center",
  },

  bannerTile: {
    fontSize: 15,
    fontFamily: "Karla-Bold",
    fontWeight: "bold",
    color: COLORS.lightBlue,
    paddingBottom: 20,
  },

  bannerAmount: {
    fontSize: 37,
    fontFamily: "Karla-Medium",
    fontWeight: "medium",
    color: COLORS.white,
    paddingBottom: 20,
  },

  addMoneyContainer: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    alignItems: "center",
    borderRadius: 8,
    backgroundColor: COLORS.green,
    justifyContent: "center",
  },

  withdrawContainer: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    alignItems: "center",
    borderRadius: 8,
    backgroundColor: COLORS.yellow,
    justifyContent: "center",
  },
});
