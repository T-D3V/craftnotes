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
      <TouchableOpacity>
        <Image source={image} style={styles.arrow} />
      </TouchableOpacity>
    </Link>
  );
};

const styles = StyleSheet.create({
  arrow: {
    width: 30,
    height: 30,
    resizeMode: "contain",
  },
});

export default BackArrow;
