import React, { useState, useEffect } from "react";
import { TextInput, StyleSheet, View } from "react-native";

interface EditNoteTitleProps {
  initialText?: string;
  sendDataToParent: (data: string) => void;
}

const EditNoteTitle: React.FC<EditNoteTitleProps> = ({
  initialText = "",
  sendDataToParent,
}) => {
  const [text, setText] = useState(initialText);

  useEffect(() => {
    sendDataToParent(text);
  }, [text]);

  const handleChangeText = (input: string) => {
    const validatedInput = input.replace(/[^a-zA-Z0-9]/g, "");
    setText(validatedInput);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.title}
        value={text}
        onChangeText={handleChangeText}
        multiline
        placeholder="Title"
        placeholderTextColor="#888"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 10,
    backgroundColor: "transparent",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#8B4513",
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
