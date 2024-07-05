import { Stack, useLocalSearchParams } from "expo-router";
import { useEffect } from "react";
import { Text, View } from "react-native";

const CreateNote = () => {
  const { filename } = useLocalSearchParams();
  useEffect(() => {});
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Edit {filename}</Text>
      </View>
    </>
  );
};

export default CreateNote;
