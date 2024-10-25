import { View, Text, SafeAreaView, StyleSheet, Image } from "react-native";
import React from "react";
import COLORS from "../../constants/app_colors";

const Dashboard = () => {
  return (
    <SafeAreaView>
      <View style={styles.bodyStyle}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
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
      </View>
    </SafeAreaView>
  );
};

export default Dashboard;
styles = StyleSheet.create({
  bodyStyle: {
    padding: 12,
  },

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
});
