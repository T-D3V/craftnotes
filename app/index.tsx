import { Stack, Link } from "expo-router";
import {
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  View,
  Dimensions,
  Text,
} from "react-native";
import NotesView from "@/components/NotesView";

const image = require("../assets/images/bg_home.png");

const Home = () => {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <SafeAreaView style={styles.container}>
        <ImageBackground
          source={image}
          resizeMode="repeat"
          style={styles.image}
        >
          <NotesView />
        </ImageBackground>
        <Link href="/edit/new" style={styles.bottomBar}>
          <Text style={styles.link}>Create Note</Text>
        </Link>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 0,
  },
  bottomBar: {
    position: "static",
    bottom: 0,
    height: Dimensions.get("window").height / 15,
    backgroundColor: "#0f0f0f",
    padding: 10,
  },
  link: {
    width: "100%",
    color: "white",
    fontSize: 32,
    fontFamily: "mc-regular",
  },
});

export default Home;
