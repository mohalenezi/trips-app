import React, { useState, useEffect } from "react";
//observer
import { observer } from "mobx-react";

//react-native
import { Text, Image } from "react-native";
//native-base
import { List, Box } from "native-base";
import { ItemTextStyled, ItemOwnerStyled, ItemOwnerNameStyled } from "./styles";

import authStore from "../../stores/authStore";
import profileStore from "../../stores/profileStore";
import ProfileTripList from "../profile/ProfileTripList";

//{, navigation} add navigation to trip item props to transfer you to trip details

const TripItem = ({ trip, navigation }) => {
  useEffect(() => {
    profileStore.fetchProfiles();
  }, []);

  let profile = profileStore.getProfileById(trip.userId);

  const handelPress = () => {
    navigation.navigate("TripModal", { oldTrip: trip });
  };
  return (
    <List.Item
      onPress={() => navigation.navigate("TripDetail", { trip: trip })}
    >
      <Image source={{ uri: trip.image }} style={{ width: 100, height: 100 }} />
      <Box>
        <ItemTextStyled>{trip.title}</ItemTextStyled>
        <ItemOwnerStyled>
          Created By:{" "}
          <ItemOwnerNameStyled>{profile?.username}</ItemOwnerNameStyled>
        </ItemOwnerStyled>
      </Box>
    </List.Item>
  );
};

export default observer(TripItem);
