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

const RecoverPassword = ({ navigation }) => {
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
            Recover password
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
            Please enter your new password to continue.
          </Text>

          <ScrollView
            contentContainerStyle={{
              flexGrow: 1,
              justifyContent: "flex-end",
            }}
            style={{ paddingTop: 30 }}
          >
            <Text style={styles.inputFieldTitle}>New password</Text>
            <InputField
              placeholder={"********"}
              secureTextEntry={true}
              onchangeText={() => {}}
            />
            <Text style={styles.inputFieldTitle}>Repeat password</Text>
            <InputField
              placeholder={"********"}
              secureTextEntry={true}
              onchangeText={() => {}}
            />

            <View style={{ paddingTop: "90%" }} />
            <BusyButton text={"CHANGE PASSWORD"} />
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default RecoverPassword;

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
