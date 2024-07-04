import { router } from "expo-router";
import {
  Dimensions,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
type props = {
  notes: Note[];
};

const NotesCollection = ({ notes }: props) => {
  const image = require("@/assets/images/sign.png");
  return (
    <View style={styles.notesContainer}>
      {notes.map((note: Note) => {
        return (
          <Pressable
            onPress={() => router.navigate(`/view/${note.filename}`)}
            style={styles.pressable}
          >
            <View key={note.title} style={styles.note}>
              <ImageBackground
                source={image}
                resizeMode="cover"
                style={styles.background}
              >
                <Text style={styles.title}>{note.title}</Text>
                <Text style={styles.text}>{note.content.substring(0, 50)}</Text>
              </ImageBackground>
            </View>
          </Pressable>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  notesContainer: {
    flex: 1,
    flexBasis: "45%",
    flexGrow: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    width: Dimensions.get("window").width,
    padding: 20,
    flexWrap: "wrap",
    gap: 20,
    overflow: "scroll",
  },
  pressable: {
    minHeight: Dimensions.get("window").height / 5,
    overflow: "hidden",
    width: "45%",
  },
  note: {
    fontFamily: "mc-regular",
    minHeight: Dimensions.get("window").height / 5,
    overflow: "hidden",
    width: "100%",
  },
  title: {
    fontFamily: "mc-regular",
    fontSize: 21,
  },
  text: {
    fontFamily: "mc-regular",
    fontSize: 16,
  },
  background: {
    height: Dimensions.get("window").height / 5,
    padding: 10,
  },
});

export default NotesCollection;
