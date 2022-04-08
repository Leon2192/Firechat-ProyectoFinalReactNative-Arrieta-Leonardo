import React from "react";
import { View, StyleSheet } from "react-native";

const Card = ({style, children}) => {
    return(
        <View style={{...styles.cardContainer, ...style}}>
            {children}
        </View>
    )
}
const styles = StyleSheet.create({
    cardContainer: { 
      shadowColor: "#000",
      shadowOffset: {
        width: 2,
        height: 1,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,
      elevation: 4,
      backgroundColor: 'white',
    }
  })

export default Card;