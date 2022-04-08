import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

const Button = ({ title, children }) => {
  return (
    <TouchableOpacity>
      <Text>{title}</Text>
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({});

export default Button;
