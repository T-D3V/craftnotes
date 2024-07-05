import * as FileSystem from "expo-file-system";

const getSingleNote = async (filename: string) => {
  const NoteContent: Note = {
    filename: filename,
    title: filename.split(".")[0],
    content: await FileSystem.readAsStringAsync(
      `${FileSystem.documentDirectory}notes/${filename}`
    ),
  };

  console.log("getNote Success");
  return NoteContent;
};

const writeNote = async (note: Note) => {
  await FileSystem.writeAsStringAsync(
    `${FileSystem.documentDirectory}notes/${note.filename}`,
    note.content,
    { encoding: FileSystem.EncodingType.UTF8 }
  );
  console.log(`Note written to system at: ${note.filename}`);
};

const getAllNotes = async () => {
  const FileList: string[] = await FileSystem.readDirectoryAsync(
    `${FileSystem.documentDirectory}notes`
  );

  const NotesContent: Note[] = await Promise.all(
    FileList.map(async (filename: string) => {
      return {
        filename: filename,
        title: filename.split(".")[0],
        content: await FileSystem.readAsStringAsync(
          `${FileSystem.documentDirectory}notes/${filename}`
        ),
      };
    })
  );
  console.log("getNotes Success");
  return NotesContent;
};

const initializeNotesFolder = async () => {
  FileSystem.makeDirectoryAsync(`${FileSystem.documentDirectory}notes`)
    .then(async (_) => {
      console.log("Folder created");
    })
    .catch(async (_) => {
      console.log("Folder already exists.");
    });
  console.log("initializeNotesFolder Success");
};

export { initializeNotesFolder, getAllNotes, getSingleNote, writeNote };
