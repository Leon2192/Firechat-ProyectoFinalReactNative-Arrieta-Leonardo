import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  Plataforma: {
    padding: 5,
    alignItems: "center",
    fontSize: 15,
    color: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 9,
    },
  },
  Perfil: {
    fontSize: 20,
    marginVertical: 10,
    textAlign: "center",
    paddingBottom: 10,
    fontFamily: "Montserrat",
  },
  AvatarPlataforma: {
    width: 250,
    height: 250,
    borderRadius: 150,
    marginBottom: 18,
  },
  buttonContainer: {
    padding: 30,
    margin: 15,
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#ff7e00",
    padding: 22,
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
  },
  description: {
    textAlign: "center",
    padding: 10,
  },
  contenedorCard: {
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.5,
    shadowRadius: 12.35,

    elevation: 19,
    padding: 30,
  },
  overlay: {
    height: 500,
    backgroundColor: "#ff7e00",
    color: "white",
    padding: 70,
  },
  textMatch: {
    fontSize: 20,
    textAlign: "center",
    color: "white",
    fontFamily: "Montserrat",
    paddingBottom: 20,
  },
  meetTitle: {
    fontSize: 28,
    marginVertical: 10,
    textAlign: "center",
    paddingBottom: 10,
    fontFamily: "Montserrat",
  },
});

export default styles;
