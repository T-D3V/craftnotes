import React, { useState, useEffect } from "react";
import {
  TextInput,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  ImageBackground,
} from "react-native";

interface EditNoteTextInputProps {
  initialText?: string;
  sendDataToParent: (data: string) => void;
}

const bookBackground = require("../assets/images/bg_book.png");

const EditNoteText: React.FC<EditNoteTextInputProps> = ({
  initialText = "",
  sendDataToParent,
}) => {
  const [text, setText] = useState(initialText);

  useEffect(() => {
    sendDataToParent(text);
  }, [text]);

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 0}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <ImageBackground
          source={bookBackground}
          resizeMode="cover"
          style={styles.bookBackground}
          imageStyle={styles.imageStyle}
        >
          <TextInput
            style={styles.input}
            value={text}
            onChangeText={setText}
            multiline
            placeholder="Enter your notes here..."
            placeholderTextColor="#888"
            autoFocus
            textAlignVertical="top"
          />
        </ImageBackground>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#1E1E1E",
  },
  bookBackground: {
    flex: 1,
    justifyContent: "center",
    borderRadius: 10,
    overflow: "hidden",
    padding: 10,
    width: "100%",
    height: "100%",
  },
  imageStyle: {
    resizeMode: "stretch",
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "flex-start",
    paddingVertical: 20,
  },
  input: {
    fontFamily: "mc-bold",
    fontSize: 16,
    color: "#FFFFFF",
    textShadowColor: "#000000",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 1,
    backgroundColor: "transparent",
    padding: 10,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#8B4513",
    minHeight: 200,
  },
});

export default EditNoteText;
