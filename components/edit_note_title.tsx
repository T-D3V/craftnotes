import React, { useState } from "react";
import { TextInput, StyleSheet, View } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { useEffect } from "react";

interface EditNoteTitleProps {
  initialText?: string;
}

const EditNoteTitle: React.FC<EditNoteTitleProps> = ({ initialText = "" }) => {
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
    <View style={styles.container}>
      <TextInput
        style={styles.title}
        value={text}
        onChangeText={setText}
        multiline
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "#1E1E1E",
    borderRadius: 10,
    borderWidth: 5,
    borderColor: "#3C3C3C",
    alignItems: "center",
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
