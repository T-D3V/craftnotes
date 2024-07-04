import { Stack, useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

const EditNote = () => {
  const { filename } = useLocalSearchParams();
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Edit {filename}</Text>
      </View>
    </>
  );
};

export default EditNote;
