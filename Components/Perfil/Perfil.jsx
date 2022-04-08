import React, { useState } from "react";
import {
  Text,
  Image,
  ScrollView,
  View,
  TouchableOpacity,
  Alert,
} from "react-native";
import Button from "../Button/Button";
import Card from "../Card/Card";
import styles from "./styles";
import { Overlay } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";

const Perfil = ({ navigation, handleDetail, usuarios }) => {
  const [visible, setVisible] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };
  const rejectMessage = () =>
    Alert.alert("UPS!!", "¡Mejor suerte en la próxima!");

  return (
    <ScrollView>
      <Text style={styles.meetTitle}>Meet people with FIRECHAT</Text>
      {usuarios.map((user) => (
        <View key={user.id} style={styles.contenedorCard}>
          <Card style={styles.carta}>
            <View style={styles.Plataforma}>
              <Text style={styles.Perfil}>{user.name}</Text>
              <Image
                source={{
                  uri: `${user.avatar}`,
                }}
                width={250}
                height={250}
                style={styles.AvatarPlataforma}
              />
              <View style={styles.buttonContainer}>
                <Button>
                  <Ionicons
                    name="md-sad"
                    size={75}
                    color="red"
                    onPress={rejectMessage}
                  />
                </Button>
                <Button>
                  <Ionicons
                    name="ios-happy"
                    size={75}
                    color="green"
                    onPress={toggleOverlay}
                  />

                  <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
                    <View style={styles.overlay}>
                      <Text style={styles.textMatch}>
                        ¡Felicitaciones! Es un MATCH.
                      </Text>
                      <Text style={styles.textMatch}>
                        ¡Habla con tu nuevo contacto!
                      </Text>
                      <Fontisto
                        name="fire"
                        size={150}
                        color="white"
                        onPress={() => {
                          navigation.navigate("Detail", {
                            itemId: user.id,
                            profileName: user.name,
                            profileImage: user.avatar,
                            profileDescription: user.description,
                          });
                        }}
                      />
                    </View>
                  </Overlay>
                </Button>
              </View>
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  navigation.navigate("Detail", {
                    itemId: user.id,
                    profileName: user.name,
                    profileImage: user.avatar,
                    profileDescription: user.description,
                  });
                }}
              >
                <Text style={styles.buttonTextProfile}>Ver perfil</Text>
              </TouchableOpacity>
            </View>
          </Card>
        </View>
      ))}
    </ScrollView>
  );
};

export default Perfil;
