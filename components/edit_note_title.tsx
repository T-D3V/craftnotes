import React, { useState } from "react";
import { TextInput, StyleSheet, View } from "react-native";

interface EditNoteTitleProps {
  initialText?: string;
}

const EditNoteTitle: React.FC<EditNoteTitleProps> = ({ initialText = "" }) => {
  const [text, setText] = useState(initialText);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.title}
        value={text}
        onChangeText={setText}
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
