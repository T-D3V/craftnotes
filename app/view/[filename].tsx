import { Stack, Link, useLocalSearchParams } from "expo-router";
import {
  ImageBackground,
  Dimensions,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

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
          <Text>View {filename}</Text>
          <Link
            href={{
              pathname: "/edit/[filename]",
              params: { filename: filename },
            }}
          >
            Edit
          </Link>
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
  input: {
    height: 40,
    margin: 12,
    borderWidth: 2,
    padding: 10,
  },
});
