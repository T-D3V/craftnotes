import { useEffect, useState } from "react";
import { Dimensions, StyleSheet, TextInput, View } from "react-native";
import { getAllNotes } from "@/services/fs";
import NotesCollection from "@/components/NotesCollection";

const NotesView = () => {
  const [notesStore, setNotesStore] = useState([
    { filename: "", title: "", content: "" },
  ]);
  const [notesDisplay, setNotesDisplay] = useState([
    { filename: "", title: "", content: "" },
  ]);

  const [searchString, setSearchString] = useState("");

  useEffect(() => {
    getAllNotes().then((data: Note[]) => setNotesDisplay(data));
    getAllNotes().then((data: Note[]) => setNotesStore(data));
  }, []);

  const onChangeText = (data: string) => {
    const filteredNotes: Note[] = notesStore.filter((note: Note) =>
      note.title.toLowerCase().includes(data.toLowerCase())
    );
    setNotesDisplay(filteredNotes);
    setSearchString(data);
  };

  return (
    <View style={styles.notesView}>
      <TextInput
        onChangeText={onChangeText}
        value={searchString}
        placeholder="Search"
        placeholderTextColor="#f0f0f0"
        style={styles.search}
      />
      <NotesCollection notes={notesDisplay} />
    </View>
  );
};

const styles = StyleSheet.create({
  notesView: {
    paddingTop: 50,
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    height: Dimensions.get("window").height,
  },
  search: {
    backgroundColor: "#0f0f0f",
    width: Dimensions.get("window").width,
    fontSize: 21,
    padding: 10,
    color: "#ffffff",
    fontFamily: "mc-regular",
  },
});

export default NotesView;
