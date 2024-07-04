import { Stack, useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function EditNote() {
  const { filename } = useLocalSearchParams();
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Edit {filename}</Text>
      </View>
    </>
  );
}
