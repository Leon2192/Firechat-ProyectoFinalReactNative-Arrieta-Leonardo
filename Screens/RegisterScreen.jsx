import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Input, Image } from "react-native-elements";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { authentication } from "../firebase";

const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignedIn, setIsSignIn] = useState(false);

  const registerUser = () => {
    createUserWithEmailAndPassword(authentication, email, password)
      .then((res) => {
        console.log(res);
        setIsSignIn(true);
      })
      .catch((res) => {
        console.log(res);
      });
  };

  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <TouchableOpacity>
            <Image
              style={styles.profile}
              source={require("../assets/logo.png")}
            />
          </TouchableOpacity>
          <Text style={styles.logoTitle}> FIRECHAT</Text>
          <Text style={styles.loginTitle}> Por favor, regístrese</Text>
          <Input
            placeholder="Ingrese su email..."
            label="Email"
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
          <TouchableOpacity
            style={styles.button}
            onPress={registerUser}
            title="Registrarme"
          >
            <Text style={styles.buttonTextProfile}>Registrarme</Text>
          </TouchableOpacity>

          <Text style={styles.accountText}>¿Ya tienes una cuenta?</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={styles.buttonTextProfile}>Iniciar sesión</Text>
          </TouchableOpacity>
          {isSignedIn === true ? navigation.navigate("Login") : null}
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  loginTitle: {
    justifyContent: "center",
    fontSize: 14,
    textAlign: "center",
    fontFamily: "Montserrat",
  },
  button: {
    width: 200,
    marginTop: 10,
    backgroundColor: "#ff7e00",
    fontFamily: "Montserrat",
  },
  container: {
    padding: 10,
    flex: 1,
    alignItems: "center",
  },
  profile: {
    width: 200,
    height: 200,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
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
    fontFamily: "Montserrat",
  },
  buttonTextProfile: {
    color: "white",
    fontSize: 17,
    fontFamily: "Montserrat",
  },
  accountText: {
    fontFamily: "Montserrat",
  },
  logoTitle: {
    fontFamily: "Montserrat",
    fontSize: 20,
  },
});

export default RegisterScreen;
