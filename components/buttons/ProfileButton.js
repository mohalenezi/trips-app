import { Button } from "galio-framework";
import React from "react";
import { Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ProfileButton = ({ userId }) => {
  const navigation = useNavigation();

  return (
    <Button
      onlyIcon
      icon="idcard"
      iconFamily="AntDesign"
      iconSize={50}
      color="#0099ff"
      iconColor="#fff"
      style={styles.ButtonStyle2}
      onPress={() => navigation.navigate("ProfileDetail", { userId })}
    ></Button>
  );
};

export default ProfileButton;

const styles = StyleSheet.create({
  ButtonStyle2: {
    width: 80,
    height: 80,
    bottom: 20,
    right: 10,
    position: "absolute",
  },
});
