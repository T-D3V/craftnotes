import React from "react";
import { StyleSheet, ImageBackground } from "react-native";

interface BookBackgroundProps {}

const bookBackground = require("../assets/images/bg_book.png");

const BookBackground: React.FC<BookBackgroundProps> = ({}) => {
  return (
    <ImageBackground
      source={bookBackground}
      style={styles.backgroundImage}
    ></ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});

export default BookBackground;
