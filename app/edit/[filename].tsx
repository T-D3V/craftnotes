import React from "react";
import { Stack, useLocalSearchParams } from "expo-router";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import BackArrow from "../../components/back_arrow";
import EditNoteTitle from "../../components/edit_note_title";
import EditNoteText from "../../components/edit_note_text";
import SaveNote from "../../components/save_note";
import EditFileName from "../../components/edit_file_name";
import { SafeAreaView } from "react-native-safe-area-context";

const image = require("../../assets/images/bg_book.png");

const EditNote = () => {
  const { filename } = useLocalSearchParams();

  const handleSave = () => {
    // Handle save action
  };

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{ flex: 1, backgroundColor: "#000000" }}>
          <ImageBackground
            source={image}
            resizeMode="cover"
            style={styles.image}
          >
            <SafeAreaView style={styles.safeArea}>
              <BackArrow srcpath="../" />
              <SaveNote onPress={handleSave} />
              <EditNoteTitle initialText="Test Text" />
              <KeyboardAvoidingView
                style={{ flex: 1, width: "100%" }}
                behavior={Platform.OS === "ios" ? "padding" : "height"}
              >
                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                  <View style={styles.textContainer}>
                    <EditNoteText />
                  </View>
                </ScrollView>
              </KeyboardAvoidingView>
              <EditFileName initialText="Test Filename" />
              <Text style={styles.filename}>Edit {filename}</Text>
            </SafeAreaView>
          </ImageBackground>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 80,
  },
  textContainer: {
    flex: 1,
    width: "100%",
    marginTop: 20,
  },
  filename: {
    color: "white",
    fontSize: 16,
    marginTop: 10,
  },
});

export default EditNote;
