import * as FileSystem from "expo-file-system";

const getSingleNote = async (filename: string) => {
  await initializeNotesFolder();
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
  await initializeNotesFolder();
  await FileSystem.writeAsStringAsync(
    `${FileSystem.documentDirectory}notes/${note.filename}`,
    note.content,
    { encoding: FileSystem.EncodingType.UTF8 }
  );
  console.log(`Note written to system at: ${note.filename}`);
};

const deleteNote = async (note: Note) => {
  await initializeNotesFolder();
  await FileSystem.deleteAsync(
    `${FileSystem.documentDirectory}notes/${note.filename}`
  );
  console.log(`Note ${note.filename} deleted`);
};

const getAllNotes = async () => {
  await initializeNotesFolder();
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

const initializeImagesFolder = async () => {
  FileSystem.makeDirectoryAsync(`${FileSystem.documentDirectory}images`)
    .then(async (_) => {
      console.log("Folder created");
    })
    .catch(async (_) => {
      console.log("Folder already exists.");
    });
  console.log("initializeImagesFolder Success");
};

export {
  initializeNotesFolder,
  getAllNotes,
  getSingleNote,
  writeNote,
  deleteNote,
  initializeImagesFolder,
};
