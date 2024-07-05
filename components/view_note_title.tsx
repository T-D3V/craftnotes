import { Text, StyleSheet, View } from "react-native";

type TitleProps = {
  text: string;
};

const ViewTitle = ({ text }: TitleProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "#1E1E1E",
    borderRadius: 10,
    borderWidth: 5,
    borderColor: "#3C3C3C",
    alignItems: "center",
  },
  title: {
    fontFamily: "mc-regular",
    fontSize: 24,
    color: "#FFFFFF",
    textShadowColor: "#000000",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 1,
  },
});

export default ViewTitle;
