import React from "react";
import { Text, StyleSheet, Pressable } from "react-native";

export default function Button(props) {
  const { onPress, title = "Button", style } = props;
  return (
    <Pressable style={[styles.button, style]} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 25,
    elevation: 3,
    backgroundColor: "#ee3a57",
  },
  text: {
    fontSize: 22,
    lineHeight: 21,
    fontWeight: "bold",
    fontFamily: "Roboto",
    letterSpacing: 0.25,
    color: "white",
  },
});
