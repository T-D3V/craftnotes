import { Stack, Link } from "expo-router";
import { Text, View } from "react-native";

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
        <Link href="/view/1">View</Link>
      </View>
    </>
  );
}
