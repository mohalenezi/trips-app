import { useNavigation } from "@react-navigation/core";
import React from "react";
import { Button } from "native-base"; // unused import, remove it
import { AntDesign } from "@expo/vector-icons";
import authStore from "../../stores/authStore";
import styled from "styled-components";

// Move this to styles.js
const SignoutButtonStyled = styled(AntDesign)`
  color: white;
  margin-right: 15px;
`;
const SignoutButton = () => {
  const navigation = useNavigation();
  const handlePress = () => {
    authStore.signout; // Clearly this doesn't work. Can you see why?
    navigation.navigate("Home");
  };
  return <SignoutButtonStyled name="logout" size={24} onPress={handlePress} />;
};

export default SignoutButton;
