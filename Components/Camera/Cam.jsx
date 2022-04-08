import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
  Image,
} from "react-native";
import { Camera } from "expo-camera";
import { Constants } from "expo-camera";
import { Feather, Ionicons, AntDesign } from "@expo/vector-icons";
import * as Permissions from "expo-permissions";
import * as MediaLibrary from "expo-media-library";

export default function Cam() {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.front);
  const camRef = useRef(null);
  const [photo, setPhoto] = useState(null);
  const [open, setOpen] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
    (async () => {
      const { status } = await Permissions.askAsync(Permissions.CAMERA);
      setHasPermission(status === "granted");
      console.log(status);
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  } else if (hasPermission === false) {
    return <Text>Acceso denegado</Text>;
  }

  async function takePicture() {
    if (camRef) {
      const data = await camRef.current.takePictureAsync();
      console.log(data);
      setPhoto(data.uri);
      setOpen(true);
    }
  }
  async function savePicture() {
    const asset = await MediaLibrary.createAssetAsync(photo)
      .then(() => {
        alert("Fotografía guardada correctamente");
      })
      .catch((error) => {
        console.log("err", error);
      });
  }

  return (
    <View style={styles.container}>
      <Camera style={{ flex: 1 }} type={type} ref={camRef}>
        <TouchableOpacity
          style={[styles.btnApp, { left: 20 }]}
          onPress={() => {
            setType(
              type === Camera.Constants.Type.front
                ? Camera.Constants.Type.back
                : Camera.Constants.Type.front
            );
          }}
        >
          <Ionicons name="camera-reverse" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.btnApp, { right: 20 }]}
          onPress={takePicture}
        >
          <Feather name="camera" size={30} color="black" />
        </TouchableOpacity>
        {photo && (
          <Modal animationType="slide" transparent={false} visible={open}>
            <View style={styles.pictureContainer}>
              <TouchableOpacity
                style={[styles.btnApp, { left: 20 }]}
                onPress={() => setOpen(false)}
              >
                <AntDesign name="closecircleo" size={35} color="red" />
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.btnApp, { right: 20 }]}
                onPress={() => savePicture()}
              >
                <Ionicons name="md-save" size={35} color="black" />
              </TouchableOpacity>
              <Image style={styles.photo} source={{ uri: photo }} />
            </View>
          </Modal>
        )}
      </Camera>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
  btnApp: {
    position: "absolute",
    padding: 10,
    bottom: 20,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  cameraText: {
    color: "yellow",
    fontSize: 14,
  },
  btnPhoto: {
    position: "absolute",
    backgroundColor: "yellow",
    padding: 10,
    right: 20,
    bottom: 20,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  photo: {
    width: "100%",
    height: 350,
  },
  closeCamera: {
    padding: 10,
    borderRadius: 10,
  },
  pictureContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
});
