import React, { useState, useEffect } from "react";
import { Stack, useLocalSearchParams } from "expo-router";
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
import BackArrow from "../../components/back_arrow";
import EditNoteTitle from "../../components/edit_note_title";
import EditNoteText from "../../components/edit_note_text";
import SaveNote from "../../components/save_note";
import DeleteNote from "../../components/delete_note";
import { writeNote, getSingleNote, deleteNote } from "@/services/fs";
import { SafeAreaView } from "react-native-safe-area-context";

const image = require("../../assets/images/bg_edit.png");

const EditNote = () => {
  const { filename } = useLocalSearchParams();
  const [note, setNote] = useState({ filename: "", title: "", content: "" });
  const [title, setTitle] = useState("");
  const [noteText, setNoteText] = useState("");

  useEffect(() => {
    getSingleNote(filename).then((data: Note) => setNote(data));
  });

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
  };

  const handleDelete = async () => {
    const note: Note = {
      filename: title + ".md",
      title: title,
      content: noteText,
    };

    deleteNote(note);
  };

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{ flex: 1 }}>
          <ImageBackground
            source={image}
            resizeMode="repeat"
            style={styles.image}
          >
            <SafeAreaView style={styles.safeArea}>
              <View style={styles.backButton}>
                <BackArrow srcpath="../" />
              </View>
              <SaveNote onPress={handleSave} />
              <EditNoteTitle
                initialText={note.title}
                sendDataToParent={handleTitleChange}
              />
              <KeyboardAvoidingView
                style={{ flex: 1, width: "100%" }}
                behavior={Platform.OS === "ios" ? "padding" : "height"}
              >
                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                  <View style={styles.textContainer}>
                    <EditNoteText
                      initialText={note.content}
                      sendDataToParent={handleNoteTextChange}
                    />
                  </View>
                </ScrollView>
              </KeyboardAvoidingView>
              <DeleteNote onPress={handleDelete} />
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
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
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
  backButton: {
    position: "absolute",
    top: 60,
    left: 20,
  },
});

export default EditNote;
