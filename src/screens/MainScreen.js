import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Button from "../components/Button";

const HomeImage = require("../../assets/HomeImage.png");
const HomeLogo = require("../../assets/logoo.png");

const MainScreen = ({ navigation }) => {
  const handlePress = () => {
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.logoContainer}>
          <Image source={HomeLogo} style={styles.logoimage} />
          <Text style={styles.title}>SWIFTSHOP</Text>
        </View>
        <Image source={HomeImage} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            Welcome to SwiftShop – your ultimate shopping destination. Discover
            top products and exclusive deals today!
          </Text>
        </View>
        <Button
          onPress={handlePress}
          title="Get Started!"
          style={styles.button}
        />
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
    marginRight: 20,
    marginLeft: 20,
  },
  title: {
    fontSize: 30,
    marginBottom: 10,
    fontWeight: "bold",
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "center",
  },
  logoContainer: {
    alignItems: "center",
  },
  logoimage: {
    width: 70,
    height: 100,
    marginBottom: 5,
  },
  image: {
    width: 350,
    height: 350,
  },
  textContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    padding: 20,
  },
  text: {
    color: "#fff",
    fontSize: 16,
  },
  button: {
    marginBottom: 20,
    paddingHorizontal: 100,
  },
});

export default MainScreen;
