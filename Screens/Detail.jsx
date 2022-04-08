import React from "react";
import {
  View,
  StyleSheet,
  FlatList,
  SafeAreaView,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import { Text, Card, Avatar, Image } from "react-native-elements";

const Detail = ({ navigation, route }) => {
  const { profileName, profileDescription, profileImage } = route.params;

  const BASE_URI = "https://source.unsplash.com/random?sig=";

  return (
    <>
      <View style={styles.container}>
        <Card>
          <Text style={styles.profileN}>{profileName}</Text>
          <Avatar
            size={64}
            rounded
            source={{
              uri: profileImage,
            }}
            backgroundColor="grey"
          />
          <Text style={styles.desc}>{profileDescription}</Text>
        </Card>
        <Card>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Mensajes")}
          >
            <Text style={styles.buttonTextProfile}>Enviar mensaje</Text>
          </TouchableOpacity>

          <SafeAreaView>
            <FlatList
              data={[...new Array(5)].map((_, i) => i.toString())}
              style={styles.list}
              numColumns={2}
              keyExtractor={(e) => e}
              renderItem={({ item }) => (
                <Image
                  source={{ uri: BASE_URI + item }}
                  containerStyle={styles.item}
                  PlaceholderContent={<ActivityIndicator />}
                />
              )}
            />
          </SafeAreaView>
        </Card>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fonts: {
    marginBottom: 8,
  },
  user: {
    flexDirection: "row",
    marginBottom: 6,
  },
  image: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  name: {
    fontSize: 20,
    marginTop: 5,
  },
  list: {
    width: "100%",
    backgroundColor: "#000",
    marginBottom: 20,
  },
  item: {
    aspectRatio: 1,
    width: "100%",
    flex: 1,
  },
  desc: {
    textAlign: "center",
    marginLeft: 40,
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
    fontSize: 17,
    fontStyle: "italic",
    fontFamily: "Montserrat",
  },
  profileN: {
    fontFamily: "Montserrat",
    textAlign: "center",
    fontSize: 18,
  },
});

export default Detail;
