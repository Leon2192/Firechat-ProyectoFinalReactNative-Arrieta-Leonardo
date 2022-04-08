import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Header as HeaderRNE, Icon } from "react-native-elements";
import { TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const AppBarHeader = () => {
  return (
    <HeaderRNE
      backgroundColor="#ff7e00"
      leftComponent={
        <View style={styles.headerLeft}>
          {<Entypo name="menu" size={35} color="white" />}
        </View>
      }
      rightComponent={
        <View style={styles.headerRight}>
          <TouchableOpacity style={{ marginLeft: 10 }}>
            <AntDesign name="logout" size={35} color="white" />
          </TouchableOpacity>
        </View>
      }
      centerComponent={
        <View>
          <MaterialIcons name="local-fire-department" size={40} color="white" />
        </View>
      }
    />
  );
};
const styles = StyleSheet.create({
  heading: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
    backgroundColor: "#ff7e00",
  },
  headerRight: {
    display: "flex",
    flexDirection: "row",
    marginTop: 5,
    backgroundColor: "#ff7e00",
  },
  subheaderText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    backgroundColor: "#ff7e00",
  },
  headerGeneral: {
    backgroundColor: "#ff7e00",
  },
  headerLeft: {
    backgroundColor: "#ff7e00",
  },
});

export default AppBarHeader;
