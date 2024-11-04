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
import React, { useEffect, useState } from "react";
import ICONS from "../../constants/app_icons";
import { SvgXml } from "react-native-svg";
import COLORS from "../../constants/app_colors";
import { TouchableOpacity } from "react-native";
import InputField from "../../components/InputField";
import BusyButton from "../../components/BusyButton";

const Login = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    // Trigger form validation when name,
    // email, or password changes
    validateForm();
  }, [phoneNumber, password]);

  const validateForm = () => {
    let errors = {};

    //   validate phone number field
    if (!phoneNumber) {
      errors.phoneNumber = "phone Number is required.";
    }

    // Validate password field
    if (!password) {
      errors.password = "Password is required.";
    } else if (password.length < 6) {
      errors.password = "Password must be at least 6 characters.";
    }

    // Set the errors and update form validityv
    setErrors(errors);
    setIsFormValid(Object.keys(errors).length === 0);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      navigation.navigate("Login");
      setErrors({});
    }
  };
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
            Sign into your Account
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
            Log into your BankMe account
          </Text>

          <ScrollView
            scrollEnabled={false}
            contentContainerStyle={{
              flexGrow: 1,
              justifyContent: "flex-end",
            }}
            style={{ paddingTop: 58 }}
          >
            <View>
              <Text style={styles.inputFieldTitle}>Phone number</Text>
              <InputField
                keyboardType="number"
                placeholder={"+ 234 808 762 1236"}
                onchangeText={setPhoneNumber}
              />

              {errors.phoneNumber ? (
                <Text style={styles.error}>{errors.phoneNumber}</Text>
              ) : null}
            </View>

            <View>
              <Text style={styles.inputFieldTitle}>Password</Text>
              <InputField
                keyboardType=""
                secureTextEntry={true}
                placeholder={"********"}
                onchangeText={setPassword}
              />
              {errors.password ? (
                <Text style={styles.error}>{errors.password}</Text>
              ) : null}
            </View>
            <Text
              style={{
                color: COLORS.shinyBlack,
                fontSize: 15,
                fontWeight: "regular",
                fontFamily: "Karla-Regular",
              }}
            >
              Have you forgotten your password?.
            </Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("ForgotPassword");
              }}
            >
              <Text
                style={{
                  color: COLORS.primary,
                  fontSize: 15,
                  paddingTop: 4,
                  fontWeight: "regular",
                  fontFamily: "Karla-Regular",
                }}
              >
                click here to recover it
              </Text>
            </TouchableOpacity>

            <View style={{ paddingTop: "30%" }} />
            <BusyButton
              isActive={!isFormValid}
              onPress={() => {
                navigation.replace("TabNavigator");
              }}
              text={"LOGIN"}
            />
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
              <TouchableOpacity>
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

export default Login;

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
  error: {
    color: "red",
    fontSize: 15,
    fontFamily: "Karla-Regular",
    marginBottom: 12,
  },
});
