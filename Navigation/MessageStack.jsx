import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Platform } from "react-native";
import Messages from "../Screens/Messages";
import { COLORS } from "../Constants/Colors";

const Stack = createNativeStackNavigator();

const MessageStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Message"
      screenOptions={{
        headerStyle: {
          backgroundColor: Platform.OS === "android" ? "red" : "",
        },
        headerTintColor: Platform.OS === "android" ? "white" : COLORS.primary,
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="Message"
        component={Messages}
        options={{ title: "Chats" }}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};

export default MessageStack;
