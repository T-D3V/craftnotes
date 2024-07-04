import React from "react";
import { Stack, useLocalSearchParams } from "expo-router";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import BackArrow from "../../components/back_arrow";
import EditNoteTitle from "../../components/edit_note_title";
import EditNoteText from "../../components/edit_note_text";
import { SafeAreaView } from "react-native-safe-area-context";

const image = require("../../assets/images/bg_edit.png");

const EditNote = () => {
  const { filename } = useLocalSearchParams();
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <View style={{ flex: 1 }}>
        <ImageBackground
          source={image}
          resizeMode="repeat"
          style={styles.image}
        >
          <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
              <BackArrow srcpath="/" />
              <EditNoteTitle initialText="Test Text" />
              <EditNoteText />
              <Text style={styles.filename}>Edit {filename}</Text>
            </View>
          </SafeAreaView>
        </ImageBackground>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  filename: {
    color: "white",
    fontSize: 16,
    marginTop: 10,
  },
});

export default EditNote;
