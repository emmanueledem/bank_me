import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import COLORS from "../../constants/app_colors";

import React from "react";
import Save from "./Save";
import Reward from "./Reward";
import Account from "./Account";
import Portfolio from "./Portfolio";
import ICONS from "../../constants/app_icons";
import { SvgXml } from "react-native-svg";
import Dashboard from "./dashboard";
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconName;
          switch (route.name) {
            case "Dashboard":
              iconName = "Dashboard";
              return (
                <SvgXml
                  xml={ICONS.home}
                  width="20"
                  size={size}
                  color={color}
                  height="20"
                />
              );
            case "Save":
              iconName = "Save";
              return (
                <SvgXml
                  xml={ICONS.save}
                  width="20"
                  size={size}
                  color={color}
                  height="20"
                />
              );

            case "Portfolio":
              iconName = "Portfolio";
              return (
                <SvgXml
                  xml={ICONS.breifCase}
                  width="20"
                  size={size}
                  color={color}
                  height="20"
                />
              );

            case "Reward":
              iconName = "Reward";
              return (
                <SvgXml
                  xml={ICONS.rewards}
                  width="20"
                  size={size}
                  color={color}
                  height="20"
                />
              );
            case "Account":
              iconName = "Account";
              return (
                <SvgXml
                  xml={ICONS.account}
                  width="20"
                  color={color}
                  size={size}
                  height="20"
                />
              );
          }
        },
        tabBarStyle: {
          backgroundColor: COLORS.white,
          paddingVertical: 5,
        },
        tabBarLabelStyle: {
          color: COLORS.gray3,
          fontSize: 15,
          fontWeight: "light",
          fontFamily: "Karla-Light",
        },
        tabBarActiveTintColor: "aqua",
        tabBarInactiveTintColor: "grey",
      })}
    >
      <Tab.Screen name="Dashboard" component={Dashboard} />
      <Tab.Screen name="Save" component={Save} />
      <Tab.Screen name="Portfolio" component={Portfolio} />
      <Tab.Screen name="Reward" component={Reward} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
