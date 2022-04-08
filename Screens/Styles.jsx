import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  Plataforma: {
    padding: 5,
    alignItems: "center",
    fontSize: 15,
    color: "#fff",
  },
  Perfil: {
    fontSize: 20,
    marginVertical: 10,
    textAlign: "center",
    paddingBottom: 10,
  },
  AvatarPlataforma: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 18,
  },
  buttonContainer: {
    padding: 20,
    margin: 15,
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#F1948A",
    padding: 15,
    borderRadius: 15,
    color: "white",
  },
  buttonTextProfile: {
    color: "white",
    fontSize: 17,
    fontStyle: "italic",
  },
  description: {
    textAlign: "center",
    padding: 10,
  },
});

export default styles;
