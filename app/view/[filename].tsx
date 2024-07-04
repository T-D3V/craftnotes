import { Stack, Link, useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

const ViewNote = () => {
  const { filename } = useLocalSearchParams();
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>View {filename}</Text>
        <Link
          href={{
            pathname: "/edit/[filename]",
            params: { filename: filename },
          }}
        >
          Edit
        </Link>
      </View>
    </>
  );
};

export default ViewNote;
