import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacityBase,
  Dimensions,
} from "react-native";
import React, { useEffect, useState } from "react";
import ICONS from "../../constants/app_icons";
import { SvgXml } from "react-native-svg";
import COLORS from "../../constants/app_colors";
import { TouchableOpacity } from "react-native";
import InputField from "../../components/InputField";
import BusyButton from "../../components/BusyButton";

let screenHeight = Dimensions.get("window").height;

const CreateAccount = ({ navigation }) => {
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setrepeatPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    // Trigger form validation when name,
    // email, or password changes
    validateForm();
  }, [phoneNumber, fullName, password, repeatPassword]);

  const validateForm = () => {
    let errors = {};

    // Validate name field
    if (!fullName) {
      errors.fullName = "Full Name is required.";
    }

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

    // Validate password field
    if (!repeatPassword) {
      errors.repeatPassword = "Confirm Password is required.";
    } else if (repeatPassword != password) {
      errors.repeatPassword = "Both Passwords do not match ";
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

          <ScrollView style={{ paddingTop: 30 }}>
            <View style={{ height: screenHeight / 1.5 }}>
              <View>
                <Text style={styles.inputFieldTitle}>Full name</Text>
                <InputField
                  keyboardType="text"
                  placeholder={"Joseph Kalu"}
                  onchangeText={setFullName}
                />
                {errors.fullName ? (
                  <Text style={styles.error}>{errors.fullName}</Text>
                ) : null}
              </View>
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

              <View>
                <Text style={styles.inputFieldTitle}>Repeat password</Text>
                <InputField
                  keyboardType=""
                  secureTextEntry={true}
                  placeholder={"********"}
                  onchangeText={setrepeatPassword}
                />
                {errors.repeatPassword ? (
                  <Text style={styles.error}>{errors.repeatPassword}</Text>
                ) : null}
              </View>

              <View style={{ paddingTop: "30%" }} />
              <BusyButton
                isActive={!isFormValid}
                onPress={() => {
                  navigation.replace("TabNavigator");
                }}
                text={"CREATE YOUR ACCOUNT"}
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
                <TouchableOpacity onPress={handleSubmit}>
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

  error: {
    color: "red",
    fontSize: 15,
    fontFamily: "Karla-Regular",
    marginBottom: 12,
  },
});
