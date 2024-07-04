import React, { useState, useEffect } from "react";
import {
  TextInput,
  StyleSheet,
  View,
  ScrollView,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";

interface EditNoteTextInputProps {
  initialText?: string;
}

const bookBackground = require("../assets/images/bg_book.png");

const EditNoteText: React.FC<EditNoteTextInputProps> = ({
  initialText = "",
}) => {
  const [text, setText] = useState(initialText);

  const [loaded, error] = useFonts({
    "mc-regular": require("../assets/fonts/mc_regular.otf"),
    "mc-italic": require("../assets/fonts/mc_bold.otf"),
    "mc-bold": require("../assets/fonts/mc_italic.otf"),
    "mc-bold-italic": require("../assets/fonts/mc_bold_italic.otf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 0}
    >
      <ImageBackground source={bookBackground} style={styles.backgroundImage}>
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          showsVerticalScrollIndicator={false}
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
        </ScrollView>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#1E1E1E",
  },
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
    resizeMode: "cover",
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
    borderRadius: 5,
    minHeight: 200,
  },
});

export default EditNoteText;
