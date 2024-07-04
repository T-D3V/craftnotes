import React from "react";
import { TouchableOpacity, Image, StyleSheet } from "react-native";
import { Link } from "expo-router";

const image = require("../assets/images/back_arrow.png");

interface BackArrowProps {
  srcpath: string;
}

const BackArrow: React.FC<BackArrowProps> = ({ srcpath }) => {
  return (
    <Link href={srcpath} asChild>
      <TouchableOpacity style={styles.button}>
        <Image source={image} style={styles.arrow} />
      </TouchableOpacity>
    </Link>
  );
};

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    top: 60,
    left: 20,
  },
  arrow: {
    width: 30,
    height: 30,
    resizeMode: "contain",
  },
});

export default BackArrow;
