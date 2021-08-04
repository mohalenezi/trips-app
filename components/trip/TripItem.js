import React, { useState } from "react";
//observer
import { observer } from "mobx-react";

//react-native
import { Text, Image } from "react-native"; //remove Text you are not using it
//native-base
import { List } from "native-base";
import { ItemTextStyled } from "./styles";

// remove this import you are not using it and the comment please
import authStore from "../../stores/authStore";
//{, navigation} add navigation to trip item props to transfer you to trip details

const TripItem = ({ trip, navigation }) => {
  //👇🏻 you are not using this function remove it or remove what ever inside the onPress Anonymous function put it here and use it. your call guys!
  const handelPress = () => {
    navigation.navigate("TripModal", { oldTrip: trip });
  };
  return (
    <List.Item
      onPress={() => navigation.navigate("TripDetail", { trip: trip })}
    >
      {/* I prefer you use a styled component for the image tag, the inline styling looks ugly don't you think so?  */}
      <Image source={{ uri: trip.image }} style={{ width: 100, height: 100 }} />
      <ItemTextStyled>{trip.title}</ItemTextStyled>
    </List.Item>
  );
};

export default observer(TripItem);
