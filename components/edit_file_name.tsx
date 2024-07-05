import React, { useState, useEffect } from "react";
import { useLocalSearchParams } from "expo-router";
import { StyleSheet, TextInput } from "react-native";

interface EditFileNameProps {
  initialText?: string;
}

const EditFileName: React.FC<EditFileNameProps> = ({ initialText = "" }) => {
  const { filename } = useLocalSearchParams();
  const [text, setText] = useState(initialText);
  useEffect(() => {
    setText(filename as string);
  });

  return (
    <>
      <TextInput
        style={styles.filename}
        value={text}
        onChangeText={setText}
        textAlignVertical="top"
      />
    </>
  );
};

const styles = StyleSheet.create({
  filename: {
    fontFamily: "mc-regular",
    color: "white",
    fontSize: 16,
    marginTop: 10,
  },
});

export default EditFileName;
