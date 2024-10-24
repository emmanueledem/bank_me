import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import OnboardingScreen from "./src/onboarding/onboardingScreen";
import WelcomeBack from "./src/authentication/WelcomeBack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AnotherOnboardingScreen from "./src/onboarding/AnotherOnboardingScreen";
import CreateAccount from "./src/authentication/CreateAccount";
import { useFonts } from "expo-font";
import Login from "./src/authentication/Login";
import ForgotPassword from "./src/authentication/ForgotPassword";
import RecoverPassword from "./src/authentication/RecoverPassword";

const stack = createStackNavigator();

const App = () => {
  const [loaded, error] = useFonts({
    "Karla-Bold": require("./assets/fonts/Karla-Bold.ttf"),
    "Karla-BoldItalic": require("./assets/fonts/Karla-BoldItalic.ttf"),
    "Karla-ExtraBold": require("./assets/fonts/Karla-ExtraBold.ttf"),
    "Karla-ExtraBoldItalic": require("./assets/fonts/Karla-ExtraBoldItalic.ttf"),
    "Karla-ExtraLight": require("./assets/fonts/Karla-ExtraLight.ttf"),
    "Karla-ExtraLightItalic": require("./assets/fonts/Karla-ExtraLightItalic.ttf"),
    "Karla-Italic": require("./assets/fonts/Karla-Italic.ttf"),
    "Karla-Light": require("./assets/fonts/Karla-Light.ttf"),
    "Karla-LightItalic": require("./assets/fonts/Karla-LightItalic.ttf"),
  });

  const [isAppFirstLauncehed, setIsAppFirstLauncehed] = React.useState(null);
  handleAppAuthentication = async () => {
    appData = await AsyncStorage.getItem("app-key");
    if (appData == null) {
      setIsAppFirstLauncehed(true);
      AsyncStorage.setItem("app-key", "false");
    } else {
      setIsAppFirstLauncehed(false);
    }
  };
  React.useEffect(() => {
    handleAppAuthentication();
  }, []);

  if (!loaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {isAppFirstLauncehed ? (
          <stack.Screen
            name="AnotherOnboardingScreen"
            component={AnotherOnboardingScreen}
          />
        ) : (
          <stack.Screen name="WelcomeBack" component={WelcomeBack} />
        )}
        <stack.Screen name="CreateAccount" component={CreateAccount} />
        <stack.Screen name="Login" component={Login} />
        <stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <stack.Screen name="RecoverPassword" component={RecoverPassword} />
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
