import React, { useState } from "react";

//react-native
import { Text, Image } from "react-native";
//native-base
import { List } from "native-base";

//{, navigation} add navigation to trip item props to transfer you to trip details

const TripItem = ({ trip }) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <List.Item
    //   onPress={() => navigation.navigate("TripDetail", { trip: trip })}
    >
      <Image source={{ uri: trip.image }} style={{ width: 100, height: 100 }} />
      <Text>{trip.title}</Text>
      <Text>{trip.description}</Text>
    </List.Item>
  );
};

export default TripItem;
