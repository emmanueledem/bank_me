import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import COLORS from "../../constants/app_colors";
import BusyButton from "../../components/BusyButton";
import SecondaryButton from "../../components/SecondaryButton";

const WelcomeBack = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View style={styles.bodyStyle}>
        <Text style={styles.welcomeBackTextStyle}>Welcome to BankMe</Text>
        <Text style={styles.subWelcomeText}>The bank for everyone.</Text>
        <View style={{ paddingTop: "40%" }} />
        <BusyButton
          onPress={() => {
            navigation.navigate("CreateAccount");
          }}
          text={"CREATE YOUR FREE ACCOUNT"}
        />

        <SecondaryButton onPress={() => {}} text={"LOG INTO YOUR ACCOUNT"} />
      </View>
    </SafeAreaView>
  );
};

export default WelcomeBack;

const styles = StyleSheet.create({
  bodyStyle: {
    padding: 12,
  },

  welcomeBackTextStyle: {
    paddingTop: "90%",
    fontSize: 30,
    fontFamily: "Karla-Bold",
    fontWeight: "bold",
    textAlign: "center",
    color: COLORS.shinyBlack,
  },

  subWelcomeText: {
    fontSize: 17,
    color: COLORS.shinyBlack,
    textAlign: "center",
    fontFamily: "Karla-Light",
    fontWeight: 40,
  },
});
