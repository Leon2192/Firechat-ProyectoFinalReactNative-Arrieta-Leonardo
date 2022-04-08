import React, {
  useLayoutEffect,
  useState,
  useCallback,
  useEffect,
} from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { auth } from "../firebase";
import { AntDesign } from "@expo/vector-icons";
import { Avatar } from "react-native-elements";
import { GiftedChat } from "react-native-gifted-chat";

const Messages = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <View>
          <Avatar
            rounded
            source={{
              uri: "https://cdn.pixabay.com/photo/2019/11/03/20/11/portrait-4599553__340.jpg",
            }}
          />
        </View>
      ),
      headerRight: () => (
        <TouchableOpacity
          style={styles.messagesBar}
          onPress={() => navigation.navigate("Login")}
        >
          <AntDesign
            name="logout"
            size={30}
            color="white"
            onPress={() => navigation.navigate("Login")}
          />
        </TouchableOpacity>
      ),
    });
  }, []);

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: "¡¡¡Hola!!!",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "Usuario",
          avatar: "https://placeimg.com/140/140/any",
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
    const { _id, createdAt, text, user } = messages[0];
  }, []);

  return (
    <View style={styles.mensajes}>
      <GiftedChat
        messages={messages}
        showAvatarForEveryMessage={true}
        onSend={(messages) => onSend(messages)}
        user={{
          _id: auth?.currentUser?.email,
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  messagesBar: {
    margin: 10,
    fontFamily: "Montserrat",
  },
  mensajes: {
    flex: 1,
    height: 500,
    paddingBottom: 50,
    fontFamily: "Montserrat",
  },
});

export default Messages;
