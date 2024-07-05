import React, { useState, useEffect } from "react";
import {
  TextInput,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  ImageBackground,
  Dimensions,
  View,
} from "react-native";

interface EditNoteTextInputProps {
  text: string;
  sendDataToParent: (data: string) => void;
}

const EditNoteText = ({ text, sendDataToParent }: EditNoteTextInputProps) => {
  const onChangeText = (data: string) => {
    sendDataToParent(data);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.text}
        value={text}
        onChangeText={onChangeText}
        multiline
        textAlignVertical="top"
        placeholder="Enter your notes here..."
        placeholderTextColor="#888"
        autoFocus
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#1E1E1E",
    borderRadius: 10,
    borderWidth: 5,
    borderColor: "#3C3C3C",
    flex: 1,
  },
  text: {
    height: "100%",
    width: "100%",
    fontFamily: "mc-regular",
    fontSize: 16,
    color: "#FFFFFF",
    textShadowColor: "#000000",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 1,
  },
});

export default EditNoteText;
