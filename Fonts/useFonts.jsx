import * as Font from "expo-font";

export default useFonts = async () => {
  await Font.loadAsync({
    Montserrat: require("../assets/Fonts/static/Montserrat-Black.ttf"),
  });
};
