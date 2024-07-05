import { Stack, Link, useLocalSearchParams } from "expo-router";
import {
  ImageBackground,
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BackArrow from "../../components/back_arrow";
import ViewTitle from "../../components/view_note_title";

const ViewNote = () => {
  const { filename } = useLocalSearchParams();
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
            <BackArrow srcpath="/" />
            <Link
              href={{
                pathname: "/edit/[filename]",
                params: { filename: filename },
              }}
            >
              <Image
                source={require("../../assets/images/edit_icon.png")}
                style={styles.editIcon}
              />
            </Link>
            <ViewTitle text="test" />
            <Text style={styles.filename}>View {filename}</Text>
          </SafeAreaView>
        </ImageBackground>
      </View>
    </>
  );
};

export default ViewNote;

const styles = StyleSheet.create({
  bgImage: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 50,
    height: 50,
  },
  safeArea: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 80,
  },
  editIcon: {
    width: 30,
    height: 30,
    margin: 20,
  },
  filename: {
    color: "white",
    fontSize: 16,
    marginTop: 10,
  },
});
