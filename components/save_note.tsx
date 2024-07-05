import React from "react";
import { TouchableOpacity, Image, StyleSheet } from "react-native";

const image = require("../assets/images/save_icon.png");

interface SaveNoteProps {
  onPress: () => Promise<void>;
}

const SaveNote: React.FC<SaveNoteProps> = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Image source={image} style={styles.icon} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    top: 60,
    right: 20,
  },
  icon: {
    width: 30,
    height: 30,
    resizeMode: "contain",
  },
});

export default SaveNote;
