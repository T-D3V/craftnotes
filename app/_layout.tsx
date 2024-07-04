import { Stack } from "expo-router/stack";
import { StyleSheet } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

const Layout = () => {
  const [loaded, error] = useFonts({
    "mc-regular": require("../assets/fonts/mc_regular.otf"),
    "mc-italic": require("../assets/fonts/mc_bold.otf"),
    "mc-bold": require("../assets/fonts/mc_italic.otf"),
    "mc-bold-italic": require("../assets/fonts/mc_bold_italic.otf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <Stack>
      <Stack.Screen name="+not-found" />
    </Stack>
  );
};

const styles = StyleSheet.create({});

export default Layout;
