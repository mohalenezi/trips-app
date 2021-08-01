import React, { useState } from "react";

//react-native
import { Text, Image } from "react-native";
//native-base
import { List } from "native-base";
import { ItemTextStyled } from "./styles";

const TripItem = ({ trip, navigation }) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <List.Item
      onPress={() => navigation.navigate("TripDetail", { trip: trip })}
    >
      <Image source={{ uri: trip.image }} style={{ width: 100, height: 100 }} />
      <ItemTextStyled>{trip.title}</ItemTextStyled>
    </List.Item>
  );
};

export default TripItem;
