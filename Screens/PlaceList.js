import React, { useLayoutEffect, useEffect } from "react";
import { StyleSheet, Platform, FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import * as addressAction from "../db/places.action";

const PlaceListScreen = () => {
  const dispatch = useDispatch();

  const places = useSelector((state) => state.places.places);
  console.log(places);

  useEffect(() => {
    dispatch(addressAction.loadAddress());
  }, []);

  return (
    <View style={styles.container}>
      <Text>Direcciones</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default PlaceListScreen;
