import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { Input, Divider } from "react-native-elements";
import { authentication } from "../firebase";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { AntDesign } from "@expo/vector-icons";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignedIn, setIsSignIn] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openImagePicker = async () => {
    let permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera is required");
      return;
    }
    const pickerResult = await ImagePicker.launchImageLibraryAsync();

    if (pickerResult.cancelled === true) {
      return;
    }
    setSelectedImage({ localUri: pickerResult.uri });
  };

  const signInUser = () => {
    signInWithEmailAndPassword(authentication, email, password)
      .then((res) => {
        setIsSignIn(true);
        console.log(res);
      })
      .catch((res) => {
        console.log(res);
      });
  };

  return (
    <>
      <ScrollView style={styles.container}>
        <Text style={styles.profileTitle}>Seleccione su foto de perfil</Text>
        <TouchableOpacity style={styles.profile} onPress={openImagePicker}>
          <Image
            style={styles.imageGlobe}
            source={{
              uri:
                selectedImage !== null
                  ? selectedImage.localUri
                  : "https://picsum.photos/200/200",
            }}
          />
        </TouchableOpacity>
        <Text style={styles.loginTitle}>O tome una nueva</Text>
        <View style={styles.camera}>
          <AntDesign
            name="camera"
            size={50}
            color="black"
            onPress={() => {
              navigation.navigate("Camera");
            }}
          ></AntDesign>
        </View>
        <Text style={styles.loginTitle}>Iniciar sesión</Text>
        <Input
          placeholder="Ingrese su usuario..."
          label="Usuario"
          leftIcon={{ type: "material", name: "email" }}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          placeholder="Ingrese su contraseña..."
          label="Password"
          leftIcon={{ type: "material", name: "lock" }}
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
        />
        <TouchableOpacity style={styles.button} onPress={signInUser}>
          <Text style={styles.buttonTextProfile}>Iniciar sesión</Text>
        </TouchableOpacity>
        <Divider />
        <Divider />
        {isSignedIn === true ? (
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Tab")}
          >
            <Text style={styles.buttonTextProfile}>Plataforma</Text>
          </TouchableOpacity>
        ) : null}

        <Text style={styles.loginTitle}>¿Dónde estoy?</Text>
        <TouchableOpacity
          style={styles.profile}
          onPress={() => {
            navigation.navigate("Location");
          }}
        >
          <MaterialCommunityIcons name="google-maps" size={100} color="green" />
        </TouchableOpacity>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  loginTitle: {
    justifyContent: "center",
    fontSize: 20,
    textAlign: "center",
    fontFamily: "Montserrat",
  },
  button: {
    width: 200,
    marginTop: 10,
  },
  container: {
    padding: 10,
    flex: 1,
  },
  imageGlobe: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  imagen: {
    alignItems: "center",
    justifyContent: "center",
  },
  profile: {
    borderRadius: 20,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    fontSize: 15,
    color: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 9,
    },
  },
  profileTitle: {
    textAlign: "center",
    fontSize: 18,
    fontFamily: "Montserrat",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#ff7e00",
    padding: 20,
    marginBottom: 15,
    borderRadius: 15,
    color: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,

    elevation: 18,
  },
  buttonTextProfile: {
    color: "white",
    fontSize: 20,
    fontStyle: "italic",
    fontFamily: "Montserrat",
  },
  camera: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Login;
