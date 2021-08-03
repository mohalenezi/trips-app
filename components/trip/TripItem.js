import React, { useState } from "react";
//observer
import { observer } from "mobx-react";

//react-native
import { Text, Image } from "react-native";
//native-base
import { List } from "native-base";
import { ItemTextStyled } from "./styles";

import authStore from "../../stores/authStore";
//{, navigation} add navigation to trip item props to transfer you to trip details

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
    </List.Item>
  );
};

export default observer(TripItem);
