import React, { useState, useEffect } from "react";
import { Stack, useLocalSearchParams, router } from "expo-router";
import {
  ImageBackground,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Dimensions,
} from "react-native";
import BackArrow from "@/components/back_arrow";
import EditNoteTitle from "@/components/edit_note_title";
import EditNoteText from "@/components/edit_note_text";
import SaveNote from "@/components/save_note";
import { writeNote, getSingleNote, deleteNote } from "@/services/fs";
import { SafeAreaView } from "react-native-safe-area-context";
import ImageLibrary from "@/components/img_library";
import { pickImage } from "@/services/camera";

const image = require("@/assets/images/bg_edit.png");

const CreateNote = () => {
  const [title, setTitle] = useState("");
  const [noteText, setNoteText] = useState("");

  const handleTitleChange = (data: string) => {
    setTitle(data);
  };

  const handleNoteTextChange = (data: string) => {
    setNoteText(data);
  };

  const handleSave = async () => {
    const note: Note = {
      filename: title + ".md",
      title: title,
      content: noteText,
    };

    writeNote(note);
    router.replace("/");
  };

  const handleImage = async () => {
    let image = await pickImage();
    if (image) {
      setNoteText(noteText + `\n![image](${image})`);
    }
  };

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <ImageBackground
            source={image}
            resizeMode="repeat"
            style={styles.image}
            height={Dimensions.get("window").height}
          >
            <SafeAreaView style={styles.safeArea}>
              <View
                style={{
                  flexDirection: "row",
                  width: Dimensions.get("window").width,
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: 20,
                }}
              >
                <BackArrow srcpath="/" />
                <ImageLibrary onPress={handleImage} />
                <SaveNote onPress={handleSave} />
              </View>
              <KeyboardAvoidingView
                style={styles.kbView}
                behavior={Platform.OS === "ios" ? "padding" : "height"}
              >
                <EditNoteTitle
                  title={title}
                  sendDataToParent={handleTitleChange}
                />
                <EditNoteText
                  text={noteText}
                  sendDataToParent={handleNoteTextChange}
                />
              </KeyboardAvoidingView>
            </SafeAreaView>
          </ImageBackground>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
};

const styles = StyleSheet.create({
  kbView: {
    flex: 1,
    gap: 20,
    width: Dimensions.get("window").width - 60,
    marginBottom: 30,
  },
  image: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  container: {
    flex: 1,
  },
});

export default CreateNote;
