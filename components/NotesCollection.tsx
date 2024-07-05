import { router } from "expo-router";
import {
  Dimensions,
  ImageBackground,
  Pressable,
  ScrollView,
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
    <ScrollView
      style={styles.scrollView}
      contentContainerStyle={styles.notesContainer}
    >
      {notes.map((note: Note) => {
        return (
          <Pressable
            onPress={() => router.navigate(`/view/${note.filename}`)}
            style={styles.pressable}
            key={note.title}
          >
            <View style={styles.note}>
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
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    width: Dimensions.get("window").width,
  },
  notesContainer: {
    width: Dimensions.get("window").width,
    padding: 20,
    gap: 20,
  },
  pressable: {
    minHeight: Dimensions.get("window").height / 5,
    overflow: "hidden",
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
