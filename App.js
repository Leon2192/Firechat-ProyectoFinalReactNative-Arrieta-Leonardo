import React, { useState } from "react";
import { StyleSheet, Text } from "react-native";
import AppBarHeader from "./Components/AppBarHeader/AppBarHeader";
import MainNavigator from "./Navigation/MainNavigator";
import { Provider } from "react-redux";
import store from "./store";
import { init } from "./db";
import { LogBox, View } from "react-native";
import AppLoading from "expo-app-loading";
import useFonts from "./Fonts/useFonts";

init()
  .then(() => console.log("Database initialized"))
  .catch((err) => {
    console.log("Database fail connect");
    console.log(err.message);
  });

const App = () => {
  LogBox.ignoreLogs([
    "AsyncStorage has been extracted from react-native core and will be removed in a future release. It can now be installed and imported from '@react-native-async-storage/async-storage' instead of 'react-native'",
  ]);

  const [IsReady, SetIsReady] = useState(false);

  const LoadFonts = async () => {
    await useFonts();
  };

  if (!IsReady) {
    return (
      <AppLoading
        startAsync={LoadFonts}
        onFinish={() => SetIsReady(true)}
        onError={() => {}}
      />
    );
  }

  return (
    <>
      <AppBarHeader />
      <Text style={styles.listaTitle}>¡Hola!</Text>
      <Provider store={store}>
        <MainNavigator />
      </Provider>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  item: {
    padding: 20,
    marginVertical: 20,
    borderColor: "black",
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  listaTitle: {
    padding: 20,
    textAlign: "center",
    fontSize: 20,
    fontFamily: "Montserrat",
  },
  listaSubTitle: {
    padding: 20,
    fontSize: 16,
    textAlign: "center",
    fontFamily: "Montserrat",
  },
  buttonContainer: {
    padding: 20,
    margin: 15,
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    paddingHorizontal: 15,
  },
});

export default App;
