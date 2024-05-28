import React, { useState } from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import TextBox from "../components/TextBox";
import { MaterialIcons } from "@expo/vector-icons";
import Button from "../components/Button";

const HomeLogo = require("../../assets/logoo.png");

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (text) => {
    setEmail(text);
    console.log("Email Value:", text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
    console.log("Password Value:", text);
  };

  const handleForgotPasswordPress = () => {
    console.log("Forgot Password Pressed");
  };

  const handleSignUpPress = () => {
    navigation.navigate("SignUp");
  };

  const handleLoginPress = () => {
    navigation.navigate("Main");
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.logoContainer}>
          <Image source={HomeLogo} style={styles.logoimage} />
          <Text style={styles.title}>SWIFTSHOP</Text>
        </View>
        <View style={styles.subheaderContainer}>
          <Text style={styles.subheaderText}>Welcome Back!</Text>
        </View>
        <View style={styles.textBoxContainer}>
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
        </View>
        <Pressable
          style={styles.forgotContainer}
          onPress={handleForgotPasswordPress}
        >
          <Text style={styles.forgotText}>Forgot Password?</Text>
        </Pressable>
        <Button
          onPress={handleLoginPress}
          title="LogIn"
          style={styles.button}
        />
        <View style={styles.signupContainer}>
          <Text style={styles.signupText}>Don't have an account? </Text>
          <Text
            style={[
              styles.signupText,
              { color: "#ee3a57", textDecorationLine: "underline" },
            ]}
            onPress={handleSignUpPress}
          >
            SignUp
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
  forgotContainer: {
    alignSelf: "flex-end",
    marginTop: 10,
  },
  forgotText: {
    color: "#fff",
    fontSize: 14,
    marginBottom: 40,
  },
  displayText: {
    marginTop: 20,
    fontSize: 16,
    color: "#fff",
  },
  textBoxContainer: {
    width: "120%",
    marginRight: 20,
    marginLeft: 20,
  },
  button: {
    marginBottom: 20,
    paddingHorizontal: 100,
  },
  signupContainer: {
    flexDirection: "row",
  },
  signupText: {
    marginBottom: 20,
    fontSize: 15,
    color: "#fff",
  },
});

export default LoginScreen;
