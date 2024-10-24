import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

import Onboarding from "react-native-onboarding-swiper";
import COLORS from "../../constants/app_colors";
import IMAGES from "../../constants/app_images";

const Dots = ({ selected }) => {
  let backgroundColor;

  backgroundColor = selected ? COLORS.primary : "rgba(0, 0, 0, 0.3)";

  return (
    <View
      style={{
        width: selected ? 20 : 6,
        height: 6,
        marginHorizontal: 3,
        borderRadius: 12,
        backgroundColor,
      }}
    />
  );
};

const Skip = ({ ...props }) => (
  <TouchableOpacity style={styles.bntStyle} {...props}>
    <Text style={styles.btnText}>Skip</Text>
  </TouchableOpacity>
);

const Next = ({ ...props }) => (
  <TouchableOpacity style={styles.NextDonebtnStyle} {...props}>
    <Text style={styles.NextDonebtnTexStyle}>Next</Text>
  </TouchableOpacity>
);

const Done = ({ ...props }) => (
  <TouchableOpacity style={styles.NextDonebtnStyle} {...props}>
    <Text style={styles.NextDonebtnTexStyle}>Done</Text>
  </TouchableOpacity>
);

const AnotherOnboardingScreen = ({ navigation }) => {
  return (
    <Onboarding
      SkipButtonComponent={Skip}
      NextButtonComponent={Next}
      DoneButtonComponent={Done}
      DotComponent={Dots}
      bottomBarColor="#fff"
      onSkip={() => navigation.replace("WelcomeBack")}
      onDone={() => navigation.navigate("WelcomeBack")}
      titleStyles={styles.titleStyles}
      subTitleStyles={styles.subTitleStyles}
      pages={[
        {
          backgroundColor: COLORS.white,
          image: <Image source={IMAGES.onboardingIlusstration1} />,
          title: "Save money",
          subtitle:
            "We help you meet your savings target monthly and our emergency plans enable you save for multiple purposes",
        },
        {
          backgroundColor: COLORS.white,
          image: <Image source={IMAGES.onboardingIlusstration2} />,
          title: "Withdraw your money",
          subtitle:
            "With just your phone number, you can withdraw your funds at any point in time from any BankMe agent close to you.",
        },
        {
          backgroundColor: COLORS.white,
          image: <Image source={IMAGES.onboardingIlusstration3} />,
          title: "Invest your money",
          subtitle:
            "Get access to risk free investments that will multiply your income and pay high returns in few months",
        },
      ]}
    />
  );
};

export default AnotherOnboardingScreen;

const styles = StyleSheet.create({
  titleStyles: {
    color: COLORS.shinyBlack,
    fontWeight: "bold",
  },

  subTitleStyles: {
    color: COLORS.shinyBlack,
    alignItems: "left",
    justifyContent: "center",
    fontSize: 17,
  },

  bntStyle: {
    marginHorizontal: 10,
    backgroundColor: COLORS.gray,
    paddingHorizontal: "20%",
    paddingVertical: 13,
    borderRadius: 5,
  },

  btnTextStyle: {
    fontSize: 16,
    fontWeight: "500",
    color: COLORS.shinyBlack,
  },

  NextDonebtnTexStyle: {
    fontSize: 16,
    fontWeight: "500",
    color: COLORS.white,
  },

  NextDonebtnStyle: {
    marginHorizontal: 10,
    backgroundColor: COLORS.primary,
    paddingHorizontal: "20%",
    paddingVertical: 13,
    borderRadius: 5,
  },
});
