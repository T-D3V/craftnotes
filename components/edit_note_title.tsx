import React, { useState, useEffect } from "react";
import { TextInput, StyleSheet, View } from "react-native";

interface EditNoteTitleProps {
  title: string;
  sendDataToParent: (data: string) => void;
}

const EditNoteTitle = ({ title, sendDataToParent }: EditNoteTitleProps) => {
  const onChangeText = (data: string) => {
    const validatedInput = data.replace(/[^a-zA-Z0-9]/g, "");
    sendDataToParent(validatedInput);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.title}
        value={title}
        onChangeText={onChangeText}
        multiline
        placeholder="Title"
        placeholderTextColor="#888"
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
  },
  title: {
    fontFamily: "mc-bold",
    fontSize: 24,
    color: "#FFFFFF",
    textShadowColor: "#000000",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 1,
    textAlign: "center",
  },
});

export default EditNoteTitle;
