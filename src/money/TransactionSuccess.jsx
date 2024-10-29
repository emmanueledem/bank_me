import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import COLORS from "../../constants/app_colors";
import ICONS from "../../constants/app_icons";
import { SvgXml } from "react-native-svg";
import BusyButton from "../../components/BusyButton";
import { useRoute } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";

const TransactionSuccess = ({ navigation }) => {
  const route = useRoute();
  const { item } = route.params;
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View
        style={{
          paddingHorizontal: 16,
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <SvgXml
          style={{ paddingBottom: 16 }}
          xml={ICONS.checkCircle}
          width="160"
          height="160"
        />
        <Text
          style={{
            fontSize: 34,
            fontFamily: "Karla-Medium",
            fontWeight: "medium",
            color: COLORS.shinyBlack,
            marginBottom: 16,
          }}
        >
          Congratulations!
        </Text>
        <Text
          style={{
            fontSize: 13,
            fontFamily: "Karla-Light",
            fontWeight: "light",
            color: COLORS.gray1,
            marginBottom: 16,
            textAlign: "center",
          }}
        >
          Your order for
          <Text
            style={{
              fontSize: 13,
              fontFamily: "Karla-Medium",
              fontWeight: "medium",
              color: COLORS.shinyBlack,
              marginBottom: 16,
            }}
          >
            {" "}
            {item.amount}{" "}
          </Text>
          {item.type == "savings"
            ? `saving was placed successfully! A text message will be sent to your phone containing the ORDER NUMBER of your transaction, phone number and address of the nearest agent to complete your transaction.`
            : `Withdrawal was placed successfully! A text message will be sent to your phone containing the ORDER NUMBER of your transaction, phone number and address of the nearest agent to complete your transaction.`}
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.replace("TabNavigator");
        }}
        style={styles.btnStyle}
      >
        <Text style={styles.btnTexStyle}> CLOSE</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  btnStyle: {
    backgroundColor: COLORS.green1,
    borderRadius: 5,
    marginHorizontal: 16,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },

  btnTexStyle: {
    color: COLORS.white,
    fontSize: 15,
    fontFamily: "Karla-Bold",
    fontWeight: "bold",
  },
});
export default TransactionSuccess;
