import { Text, StyleSheet, View, Dimensions, ScrollView } from "react-native";
import Markdown from "react-native-markdown-display";

type NoteProps = {
  text: string;
};

const ViewContent = ({ text }: NoteProps) => {
  return (
    <ScrollView
      style={styles.scrollContainer}
      contentInsetAdjustmentBehavior="automatic"
      contentContainerStyle={styles.container}
    >
      <Markdown style={mdStyles}>{text}</Markdown>
    </ScrollView>
  );
};

const mdStyles = StyleSheet.create({
  list_item: {
    color: "#ffffff",
    fontFamily: "mc-regular",
  },
  text: {
    fontFamily: "mc-regular",
    color: "#FFFFFF",
    textShadowColor: "#000000",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 1,
  },
});

const styles = StyleSheet.create({
  scrollContainer: {
    backgroundColor: "#1E1E1E",
    borderRadius: 10,
    borderWidth: 5,
    borderColor: "#3C3C3C",
    flex: 1,
    width: Dimensions.get("window").width - 60,
    marginTop: 0,
    margin: 30,
  },
  container: {
    padding: 20,
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

export default ViewContent;
