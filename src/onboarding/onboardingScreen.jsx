import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";

import React, { useEffect, useRef, useState } from "react";

import COLORS from "../../constants/app_colors.jsx";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
const { width, height } = Dimensions.get("window");

const slides = [
  {
    id: "1",
    image: require("../../assets/images/illustration1.png"),
    title: "Save money",
    subtTitle:
      "We help you meet your savings target monthly. \n Our emergency plans  enable you save for multiple purposes",
  },
  {
    id: "2",
    image: require("../../assets/images/illustration2.png"),
    title: "Withdraw your money",
    subtTitle:
      "With just your phone number, you can withdraw your funds \n at any point in time from any BankMe agent close to you.",
  },
  {
    id: "3",
    image: require("../../assets/images/illustration3.png"),
    title: "Invest your money",
    subtTitle:
      "Get access to risk free investments that will multiply \n your income and pay high returns in few months",
  },
];

const Slide = ({ item }) => {
  return (
    <View style={{ alignItems: "center" }}>
      <Image
        source={item.image}
        style={{ height: "75%", width, resizeMode: "contain" }}
      />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.subtTitle}>{item.subtTitle}</Text>
    </View>
  );
};

const OnboardingScreen = ({ navigation }) => {
  const [currentSliderIndex, setcurrentSliderIndex] = useState(0);
  const ref = useRef(null);
  const Footer = ({ item }) => {
    return (
      <View
        style={{
          justifyContent: "space-between",
          paddingHorizontal: 20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 20,
          }}
        >
          {slides.map((_, index) => (
            <View
              key={index}
              style={[
                styles.indicator,
                currentSliderIndex == index && {
                  backgroundColor: COLORS.primary,
                  width: 30,
                },
              ]}
            />
          ))}
        </View>

        <View style={{ marginBottom: 20, marginTop: 10 }}>
          {currentSliderIndex == slides.length - 1 ? (
            <View style={{ height: 50 }}>
              <TouchableOpacity
                onPress={() => navigation.replace("WelcomeBack")}
                style={[styles.btn]}
              >
                <Text
                  style={{
                    color: COLORS.white,
                    fontWeight: "bold",
                    fontSize: 15,
                  }}
                >
                  GET STARTED
                </Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                onPress={skip}
                style={[
                  styles.btn,
                  { backgroundColor: "transparent", borderWidth: 1 },
                ]}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 15,
                  }}
                >
                  SKIP
                </Text>
              </TouchableOpacity>
              <View style={{ width: 15 }} />
              <TouchableOpacity onPress={goToNextSlide} style={[styles.btn]}>
                <Text
                  style={{
                    color: COLORS.white,
                    fontWeight: "bold",
                    fontSize: 15,
                  }}
                >
                  NEXT
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    );
  };

  const updateCurrentSlideIndex = (e) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setcurrentSliderIndex(currentIndex);
  };

  const goToNextSlide = () => {
    const nextSlideIndex = currentSliderIndex + 1;
    if (nextSlideIndex != slides.length) {
      const offset = nextSlideIndex * width;
      ref?.current?.scrollToOffset({ offset });
      setcurrentSliderIndex(nextSlideIndex);
    }
  };

  const skip = () => {
    const lastSlideIndex = slides.length - 1;
    const offset = lastSlideIndex * width;
    ref?.current?.scrollToOffset({ offset });
    setcurrentSliderIndex(lastSlideIndex);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <StatusBar backgroundColor={COLORS.primary} />
      <FlatList
        ref={ref}
        data={slides}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        contentContainerStyle={{ height: height * 0.7 }}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        horizontal
        pagingEnabled
        renderItem={({ item }) => <Slide item={item} />}
      />
      <Footer />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    color: COLORS.shinyBlack,
    fontWeight: "bold",
    marginTop: 20,
    textAlign: "center",
    fontSize: 22,
  },

  subtTitle: {
    color: COLORS.shinyBlack,
    fontWeight: "bold",
    marginTop: 10,
    textAlign: "center",
    fontSize: 13,
    maxWidth: "70%",
    lineHeight: 23,
  },

  indicator: {
    height: 10,
    width: 10,
    backgroundColor: COLORS.gray,
    marginHorizontal: 3,
    borderRadius: 30,
  },

  btn: {
    flex: 1,
    height: 50,
    borderRadius: 5,
    alignItems: "center",
    backgroundColor: COLORS.primary,
    justifyContent: "center",
  },
});
export default OnboardingScreen;
