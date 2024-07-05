import React from "react";
import { TouchableOpacity, Image, StyleSheet } from "react-native";

const image = require("../assets/images/bin_icon.png");

interface DeleteNoteProps {
  onPress: () => Promise<void>;
}

const DeleteNote: React.FC<DeleteNoteProps> = ({ onPress }) => {
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

export default DeleteNote;
