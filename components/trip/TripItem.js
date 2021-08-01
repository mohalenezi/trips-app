import React, { useState } from "react";

//react-native
import { Text, Image } from "react-native";
//native-base
import { List } from "native-base";
import { ItemTextStyled } from "./styles";
import { AntDesign } from "@expo/vector-icons";
import styled from "styled-components";


import authStore from "../../stores/authStore";
//{, navigation} add navigation to trip item props to transfer you to trip details

const OpenButtonStyled = styled(AntDesign)`
  color: grey;
  margin-left: 10px;
`;

const TripItem = ({ trip, navigation }) => {


const TripItem = ({ trip, navigation }) => {
  const handelPress = () => {
    navigation.navigate("TripModal", { oldTrip: trip });
  };
  return (
    <List.Item
      onPress={() => navigation.navigate("TripDetail", { trip: trip })}
    >
      <Image source={{ uri: trip.image }} style={{ width: 100, height: 100 }} />
      <ItemTextStyled>{trip.title}</ItemTextStyled>

      {/* its not showing description */}
      {/* <Text>{trip.description}</Text> */}
      {authStore.user && (
        <>
          <OpenButtonStyled
            name="logout"
            size={24}
            onPress={handelPress}
            oldTrip={trip}
          />
        </>
      )}

    </List.Item>
  );
};

export default TripItem;
