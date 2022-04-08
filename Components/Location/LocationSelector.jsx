import React, { useState } from "react";
import { View, StyleSheet, Alert, Text, Button } from "react-native";
import * as Location from "expo-location";

const LocationSelector = (props) => {
  const [pickedLocation, setPickedLocation] = useState();

  const handleGetLocation = async () => {
    const isLocationOk = await verifyPermissions();
    if (!isLocationOk) return;

    const location = await Location.getCurrentPositionAsync({
      timeout: 5000,
    });
    setPickedLocation({
      lat: location.coords.latitude,
      lng: location.coords.longitude,
    });
    props.onLocation({
      lat: location.coords.latitude,
      lng: location.coords.longitude,
    });
  };

  const verifyPermissions = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "Permisos insuficientes",
        "Necesita dar permisos de la localización para utilizar la app",
        [{ text: "Ok" }]
      );
      return false;
    }
    return true;
  };

  return (
    <View style={styles.container}>
      <View style={styles.preview}>
        {pickedLocation ? (
          <Text>
            {pickedLocation.lat}, {pickedLocation.lng}
          </Text>
        ) : (
          <Text>Esperando ubicación...</Text>
        )}
      </View>
      <Button
        title="Obtener locacion"
        color={"green"}
        onPress={handleGetLocation}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 10,
  },
  preview: {
    width: "100%",
    height: 200,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "red",
    borderWidth: 1,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
export default LocationSelector;
