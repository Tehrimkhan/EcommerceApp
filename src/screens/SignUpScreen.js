import { StyleSheet, Text, View, Image } from "react-native";
import React, { useState } from "react";
import { MaterialIcons, FontAwesome5 } from "@expo/vector-icons";
import Button from "../components/Button";
import TextBox from "../components/TextBox";

const HomeLogo = require("../../assets/logoo.png");

const SignUpScreen = ({ navigation }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [password, setPassword] = useState("");

  const handleFirstNameChange = (text) => {
    setFirstName(text);
    console.log("FirstName Value:", text);
  };
  const handleLastNameChange = (text) => {
    setLastName(text);
    console.log("LastName Value:", text);
  };
  const handleEmailChange = (text) => {
    setEmail(text);
    console.log("Email Value:", text);
  };
  const handlePasswordChange = (text) => {
    setPassword(text);
    console.log("Password Value:", text);
  };
  const handleConfirmPasswordChange = (text) => {
    setConfirmPassword(text);
    console.log("Confirm Password Value:", text);
  };
  const handlePress = () => {
    navigation.navigate("Main");
  };
  const handlelogInPress = () => {
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.logoContainer}>
          <Image source={HomeLogo} style={styles.logoimage} />
          <Text style={styles.title}>SWIFTSHOP</Text>
        </View>
        <View style={styles.subheaderContainer}>
          <Text style={styles.subheaderText}>Let's get started!</Text>
        </View>
        <View style={styles.textBoxContainer}>
          <TextBox
            placeholder="Enter First Name..."
            icon={<FontAwesome5 name="user-alt" size={23} color="black" />}
            onChangeText={handleFirstNameChange}
          />
          <TextBox
            placeholder="Enter Last Name..."
            icon={<FontAwesome5 name="user-alt" size={23} color="black" />}
            onChangeText={handleLastNameChange}
          />
          <TextBox
            placeholder="Enter Email..."
            icon={<MaterialIcons name="email" size={24} color="black" />}
            onChangeText={handleEmailChange}
          />
          <TextBox
            placeholder="Enter Password..."
            icon={<MaterialIcons name="lock" size={24} color="black" />}
            onChangeText={handlePasswordChange}
            secureTextEntry={true}
          />
          <TextBox
            placeholder="Enter Confirm Password..."
            icon={<MaterialIcons name="lock" size={24} color="black" />}
            onChangeText={handleConfirmPasswordChange}
            secureTextEntry={true}
          />
        </View>
        <Button onPress={handlePress} title="SignUp" style={styles.button} />
        <View style={styles.logInContainer}>
          <Text style={styles.logInText}>Already have an account? </Text>
          <Text
            style={[
              styles.logInText,
              { color: "#ee3a57", textDecorationLine: "underline" },
            ]}
            onPress={handlelogInPress}
          >
            LogIn
          </Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1c1e33",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    backgroundColor: "rgba(37, 39, 62, 0.8)",
    alignItems: "center",
    paddingTop: 10,
    borderRadius: 25,
    paddingHorizontal: 40,
  },
  logoContainer: {
    alignItems: "center",
  },
  logoimage: {
    width: 70,
    height: 100,
    marginBottom: 5,
  },
  title: {
    fontSize: 30,
    marginBottom: 50,
    fontWeight: "bold",
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "center",
  },
  subheaderContainer: {},
  subheaderText: {
    color: "#fff",
    fontSize: 20,
  },
  textBoxContainer: {
    width: "120%",
    marginRight: 20,
    marginLeft: 20,
  },
  button: {
    marginTop: 30,
    marginBottom: 20,
    paddingHorizontal: 100,
  },
  logInContainer: {
    flexDirection: "row",
  },
  logInText: {
    marginBottom: 20,
    fontSize: 15,
    color: "#fff",
  },
});
export default SignUpScreen;
