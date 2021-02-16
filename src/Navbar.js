import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const Navbar = (props) => {
  state = {
    fontLoaded: false,
  };

  return (
    <View style={styles.navbar}>
      <Text style={styles.text}>Create Todo List</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    height: "25%",
    width: "100%",
    paddingVertical: 30,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#31af",
  },
  text: {
    color: "#ffff",
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 10,
    borderBottomColor: "white",
    textAlign: "center",
  },
});
