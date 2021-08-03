import React from "react";
import tripStore from "../../stores/tripStore";
import { List } from "native-base";
import TripItem from "../trip/TripItem";
import { useNavigation } from "@react-navigation/native";

const ProfileTripList = ({ userId }) => {
  const navigation = useNavigation();

  const trips = tripStore.trips
    .filter((trip) => trip.userId === userId)
    .map((trip) => (
      <TripItem trip={trip} key={trip.id} navigation={navigation} />
    ));

  return <List>{trips}</List>;
};

export default ProfileTripList;
