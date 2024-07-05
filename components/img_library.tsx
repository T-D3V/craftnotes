import React from "react";
import { TouchableOpacity, Image, StyleSheet } from "react-native";

const image = require("../assets/images/gallery.png");

interface ImageLibraryProps {
  onPress: () => Promise<void>;
}

const ImageLibrary = ({ onPress }: ImageLibraryProps) => {
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

export default ImageLibrary;
