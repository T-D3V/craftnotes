import React from "react";
import { TouchableOpacity, Image, StyleSheet } from "react-native";

const image = require("../assets/images/save_icon.png");

interface SaveNoteProps {
  onPress: () => Promise<void>;
}

const SaveNote: React.FC<SaveNoteProps> = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image source={image} style={styles.icon} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30,
    padding: 15,
    resizeMode: "contain",
  },
});

export default SaveNote;
