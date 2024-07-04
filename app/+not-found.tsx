import { Link, Stack } from "expo-router";
import { StyleSheet, View } from "react-native";
export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <View>
        <Text type="title">This screen doesn't exist.</Text>
        <Link href="/">
          <Text type="link">Go to home screen!</Text>
        </Link>
      </View>
    </>
  );
}
