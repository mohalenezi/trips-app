import { useNavigation } from "@react-navigation/core";
import React from "react";
import { Button } from "native-base";
import { AntDesign } from "@expo/vector-icons";
import authStore from "../../stores/authStore";
import styled from "styled-components";
import tripStore from "../../stores/tripStore";
import TripModal from "../trip/TripModal";
// remove all the imports you are not using👆🏻

//👇🏻again you know what I am gonna say
const UpdateButtonStyled = styled(AntDesign)`
  color: grey;
  margin-left: 20%;
`;
// 👆🏻
const UpdateButton = ({ oldTrip }) => {
  const navigation = useNavigation();
  const handlePress = () => {
    tripStore.tripUpdate(oldTrip);
    navigation.navigate("TripModal");
  };
  return <UpdateButtonStyled name="logout" size={24} onPress={handlePress} />;
};

export default UpdateButton;
