import { View, Text, SafeAreaView, ScrollView, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import COLORS from "../../constants/app_colors";
import ICONS from "../../constants/app_icons";
import { TouchableOpacity } from "react-native";
import { SvgXml } from "react-native-svg";
import InputField from "../../components/InputField";
import { useRoute } from "@react-navigation/native";
import BusyButton from "../../components/BusyButton";

const WithdrawMoneyDetails = ({ navigation }) => {
  const route = useRoute();
  const { value } = route.params;

  // State variables to store form inputs,
  // errors, and form validity
  const [phoneNumber, setPhoneNumber] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [pin, setPin] = useState("");
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  console.log(errors);

  useEffect(() => {
    // Trigger form validation when name,
    // email, or password changes
    validateForm();
  }, [phoneNumber, customerName, pin]);

  const validateForm = () => {
    let errors = {};

    // Validate name field
    if (!phoneNumber) {
      errors.phoneNumber = "phone Number is required.";
    }

    //   validate customer field
    if (!customerName) {
      errors.customerName = "Customer Name is required.";
    }

    // Validate pin field
    if (!pin) {
      errors.pin = "Pin is required.";
    } else if (pin.length < 6) {
      errors.pin = "Pin must be at least 6 characters.";
    }

    // Set the errors and update form validityv
    setErrors(errors);
    setIsFormValid(Object.keys(errors).length === 0);
    return Object.keys(errors).length === 0;
  };
  const handleSubmit = () => {
    if (validateForm()) {
      navigation.navigate("TransactionSuccess", {
        item: { type: "withdrawal", amount: value },
      });
      setErrors({});
    }
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={{ paddingHorizontal: 16, flex: 1 }}>
        <View
          style={{
            flexDirection: "row",
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
            style={{ paddingTop: 16, position: "absolute", left: 16 }}
          >
            <SvgXml xml={ICONS.close} width="20" height="20" />
          </TouchableOpacity>
          <Text style={{ textAlign: "center" }}>Balance:#50,000</Text>
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flexGrow: 1, paddingBottom: 16 }}
        >
          <View style={{ paddingTop: 60 }}>
            <Text style={styles.inputFieldTitle}>Amount</Text>
            <InputField
              value={value}
              keyboardType="numeric"
              editable={false}
              placeholder={"Amount"}
              onchangeText={() => {}}
            />
          </View>
          <View style={{ paddingTop: 20 }}>
            <Text style={styles.inputFieldTitle}>Phone Number</Text>
            <InputField
              keyboardType="tel"
              placeholder={"+234 806 123 89"}
              onchangeText={setPhoneNumber}
            />
            {errors.phoneNumber ? (
              <Text style={styles.error}>{errors.phoneNumber}</Text>
            ) : null}
          </View>
          <View style={{ paddingTop: 20 }}>
            <Text style={styles.inputFieldTitle}>Customer Name</Text>
            <InputField
              keyboardType="text"
              placeholder={"Joseph Kalu"}
              onchangeText={setCustomerName}
            />
            {errors.customerName ? (
              <Text style={styles.error}>{errors.customerName}</Text>
            ) : null}
          </View>
          <View style={{ paddingTop: 20 }}>
            <Text style={styles.inputFieldTitle}>Pin</Text>
            <InputField
              keyboardType="text"
              placeholder={"*****"}
              secureTextEntry={true}
              onchangeText={setPin}
            />
            {errors.pin ? <Text style={styles.error}>{errors.pin}</Text> : null}
          </View>
        </ScrollView>
        <BusyButton
          isActive={!isFormValid}
          onPress={handleSubmit}
          text={"Save"}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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

export default WithdrawMoneyDetails;
