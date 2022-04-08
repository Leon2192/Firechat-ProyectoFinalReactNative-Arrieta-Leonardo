import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { StyleSheet, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import MessageStack from "../Navigation/MessageStack";
import Plataforma from "../Screens/Plataforma";

const BottomTabs = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <BottomTabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
      }}
      initialRouteName="Plataforma"
    >
      <BottomTabs.Screen
        name="Platform"
        component={Plataforma}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <AntDesign
                name="home"
                size={25}
                color={focused ? "#ff7e00" : "black"}
              />
            </View>
          ),
        }}
      />
      <BottomTabs.Screen
        name="Message Tab"
        component={MessageStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <AntDesign
                name="message1"
                size={25}
                color={focused ? "#ff7e00" : "#ff7e00"}
              />
            </View>
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    position: "absolute",
    left: 20,
    right: 20,
    borderRadius: 15,
    height: 45,
    shadowColor: "#ccc",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 0.25,
    elevation: 5,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 10,
  },
});

export default TabNavigator;
