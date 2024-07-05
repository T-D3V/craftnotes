import React from "react";
import { TouchableOpacity, Image, StyleSheet } from "react-native";
import { Link } from "expo-router";

const image = require("../assets/images/edit_icon.png");

type EditIconProps = {
  href: {
    pathname: string;
    params: {
      filename: string;
    };
  };
};

const EditIcon = ({ href }: EditIconProps) => {
  return (
    <Link href={href} asChild>
      <TouchableOpacity>
        <Image source={image} style={styles.pen} />
      </TouchableOpacity>
    </Link>
  );
};

const styles = StyleSheet.create({
  pen: {
    width: 60,
    height: 60,
    resizeMode: "contain",
  },
});

export default EditIcon;
