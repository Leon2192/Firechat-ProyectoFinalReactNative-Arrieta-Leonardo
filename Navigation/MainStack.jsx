import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Detail from "../Screens/Detail";
import Plataforma from "../Screens/Plataforma";
import Perfil from "../Components/Perfil/Perfil";
import Login from "../Screens/Login";
import RegisterScreen from "../Screens/RegisterScreen";
import Messages from "../Screens/Messages";
import Cam from "../Components/Camera/Cam";
import LocationSelector from "../Components/Location/LocationSelector";
import TabNavigator from "../Tab/TabNavigator";

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Plataforma" component={Plataforma} />
      <Stack.Screen name="Detail" component={Detail} />
      <Stack.Screen name="Perfil" component={Perfil} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Mensajes" component={Messages} />
      <Stack.Screen name="Camera" component={Cam} />
      <Stack.Screen name="Location" component={LocationSelector} />
      <Stack.Screen name="Tab" component={TabNavigator} />
    </Stack.Navigator>
  );
};

export default MainStack;
