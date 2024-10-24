import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacityBase,
} from "react-native";
import React from "react";
import ICONS from "../../constants/app_icons";
import { SvgXml } from "react-native-svg";
import COLORS from "../../constants/app_colors";
import { TouchableOpacity } from "react-native";
import InputField from "../../components/InputField";
import BusyButton from "../../components/BusyButton";

const CreateAccount = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View style={styles.bodyStyle}>
        <View style={styles.wrapper}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
          >
            <SvgXml xml={ICONS.close} width="20" height="20" />
          </TouchableOpacity>
        </View>
        <View style={{ top: 50 }}>
          <Text
            style={{
              color: COLORS.primary,
              fontFamily: "Karla-Bold",
              fontSize: 35,
              fontWeight: "bold",
            }}
          >
            Create Account
          </Text>
          <Text
            style={{
              color: COLORS.shinyBlack,
              fontSize: 15,
              paddingTop: 5,
              fontFamily: "Karla-Regular",
              fontWeight: "regular",
            }}
          >
            Open a BankMe account with a few details.
          </Text>

          <ScrollView
            contentContainerStyle={{
              flexGrow: 1,
              justifyContent: "flex-end",
            }}
            style={{ paddingTop: 30 }}
          >
            <Text style={styles.inputFieldTitle}>Full name</Text>
            <InputField
              keyboardType="text"
              placeholder={"Joseph Kalu"}
              onchangeText={() => {}}
            />
            <Text style={styles.inputFieldTitle}>Phone number</Text>
            <InputField
              keyboardType="number"
              placeholder={"+ 234 808 762 1236"}
              onchangeText={() => {}}
            />
            <Text style={styles.inputFieldTitle}>Password</Text>
            <InputField
              keyboardType=""
              secureTextEntry={true}
              placeholder={"********"}
              onchangeText={() => {}}
            />
            <Text style={styles.inputFieldTitle}>Repeat password</Text>
            <InputField
              keyboardType=""
              secureTextEntry={true}
              placeholder={"********"}
              onchangeText={() => {}}
            />
            <View style={{ paddingTop: "30%" }} />
            <BusyButton text={"CREATE YOUR ACCOUNT"} />
            <View style={{ flexDirection: "row", paddingTop: 10 }}>
              <Text
                style={{
                  color: COLORS.shinyBlack,
                  fontSize: 15,
                  fontWeight: "regular",
                  fontFamily: "Karla-Regular",
                }}
              >
                Do you already have a BankMe account?{" "}
              </Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Login");
                }}
              >
                <Text
                  style={{
                    color: COLORS.primary,
                    fontSize: 15,
                    fontWeight: "regular",
                    fontFamily: "Karla-Regular",
                  }}
                >
                  Sign in here
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CreateAccount;

const styles = StyleSheet.create({
  bodyStyle: {
    padding: 12,
  },

  wrapper: {
    left: 16,
    width: 60,
  },

  inputFieldTitle: {
    fontSize: 15,
    paddingBottom: 10,
    fontFamily: "Karla-Regular",
    color: COLORS.shinyBlack,
  },
});
