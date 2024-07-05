import { Text, StyleSheet, View, Dimensions, ScrollView } from "react-native";

type TitleProps = {
  text: string;
};

const ViewTitle = ({ text }: TitleProps) => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "#1E1E1E",
    borderRadius: 10,
    borderWidth: 5,
    borderColor: "#3C3C3C",
    flex: 1,
    width: Dimensions.get("window").width - 60,
    marginTop: 0,
    margin: 30,
  },
  text: {
    fontFamily: "mc-regular",
    fontSize: 16,
    color: "#FFFFFF",
    textShadowColor: "#000000",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 1,
  },
});

export default ViewTitle;
