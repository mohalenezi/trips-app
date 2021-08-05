import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/core";
import authStore from "../../stores/authStore";

const OwnProfileButton = () => {
  const navigation = useNavigation();
  const user = authStore.user;

  return (
    <>
      <FontAwesome
        style={styles.buttonStyle}
        name="user-circle-o"
        size={24}
        color="white"
        onPress={() =>
          navigation.navigate("ProfileDetail", { userId: user.id })
        }
      />
    </>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    marginRight: 15,
  },
});

export default OwnProfileButton;
