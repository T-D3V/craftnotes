import { Stack, Link, useLocalSearchParams } from "expo-router";
import {
  ImageBackground,
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackgroundBase,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BackArrow from "../../components/back_arrow";
import ViewContent from "../../components/view_note_content";
import { useEffect, useState } from "react";
import { getSingleNote } from "@/services/fs";
import EditIcon from "@/components/edit_icon";

const ViewNote = () => {
  const { filename } = useLocalSearchParams();
  const [note, setNote] = useState({ filename: "", title: "", content: "" });

  useEffect(() => {
    getSingleNote(filename).then((data: Note) => setNote(data));
  }, []);

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ImageBackground
          source={require("../../assets/images/bg_view.png")}
          style={{ width: "100%", height: "100%" }}
          imageStyle={{ resizeMode: "repeat" }}
        >
          <SafeAreaView style={styles.safeArea}>
            <View
              style={{
                flexDirection: "row",
                width: Dimensions.get("window").width,
                justifyContent: "space-between",
                alignItems: "center",
                padding: 20,
              }}
            >
              <BackArrow srcpath="/" />
              <Text style={styles.filename}>View {note.title}</Text>
              <EditIcon
                href={{
                  pathname: "/edit/[filename]",
                  params: { filename: note.filename },
                }}
              />
            </View>
            <ViewContent text={note.content} />
          </SafeAreaView>
        </ImageBackground>
      </View>
    </>
  );
};

export default ViewNote;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  filename: {
    fontFamily: "mc-regular",
    color: "white",
    fontSize: 16,
    marginTop: 10,
  },
});
