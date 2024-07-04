import React from "react";
import { Stack, useLocalSearchParams } from "expo-router";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

const image = require("../../assets/images/bg_edit.png");

const EditNote = () => {
  const { filename } = useLocalSearchParams();
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ImageBackground
          source={image}
          resizeMode="repeat"
          style={styles.image}
        >
          <Text>Edit {filename}</Text>
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
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    textAlign: "center",
    backgroundColor: "#000000c0",
  },
});

export default EditNote;
