import React from "react";
import tripStore from "../../stores/tripStore";
import { List } from "native-base";
import TripItem from "../trip/TripItem";
import { useNavigation } from "@react-navigation/native";
import { grid } from "styled-system";
import { ListWrapper } from "../trip/styles";

const ProfileTripList = ({ userId }) => {
  const navigation = useNavigation();

  const trips = tripStore.trips
    .filter((trip) => trip.userId === userId)
    .map((trip) => (
      <TripItem trip={trip} key={trip.id} navigation={navigation} />
    ));

  return <ListWrapper>{trips}</ListWrapper>;
};

export default ProfileTripList;
