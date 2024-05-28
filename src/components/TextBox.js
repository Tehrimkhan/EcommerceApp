import React, { useState } from "react";
import { StyleSheet, View, TextInput } from "react-native";

export default function TextBox({
  placeholder,
  icon,
  onChangeText,
  secureTextEntry,
}) {
  const [value, setValue] = useState("");

  const handleTextChange = (text) => {
    setValue(text);
    if (onChangeText) {
      onChangeText(text);
    }
  };

  return (
    <View style={styles.container}>
      {icon && <View style={styles.icon}>{icon}</View>}
      <TextInput
        style={styles.textInput}
        placeholder={placeholder}
        placeholderTextColor="#888"
        value={value}
        onChangeText={handleTextChange}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 25,
    backgroundColor: "#fff",
    marginTop: 20,
  },
  textInput: {
    flex: 1,
    paddingLeft: 5,
    color: "#000",
    fontSize: 17,
    borderRadius: 25,
  },
  icon: {
    marginRight: 10,
  },
});
