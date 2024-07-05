import * as ImagePicker from "expo-image-picker";
import * as FileSystem from "expo-file-system";
import { initializeImagesFolder } from "./fs";

const pickImage = async () => {
  let perms = await ImagePicker.getMediaLibraryPermissionsAsync();
  if (!perms.granted) {
    let permReq = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permReq.granted) {
      return null;
    }
  }
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
  });

  console.log(result);

  if (!result.canceled) {
    await initializeImagesFolder();
    let name = result.assets[0].uri.match(/[a-zA-Z0-9\-]*.jpeg/gm);
    FileSystem.copyAsync({
      from: result.assets[0].uri,
      to: `${FileSystem.documentDirectory}images/${name}`,
    });
    return `${FileSystem.documentDirectory}images/${name}`;
  }

  return null;
};

const takeImage = async () => {
  let result = await ImagePicker.launchCameraAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
  });

  console.log(result);

  if (!result.canceled) {
    return result;
  }

  return null;
};

export { pickImage, takeImage };
