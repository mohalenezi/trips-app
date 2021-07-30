import React from "react";

//native-base
import { List, Spinner } from "native-base";

// styles
import { ListWrapper } from "./styles";
// components
import TripItem from "./TripItem";

//observer
import { observer } from "mobx-react";

//stores
import tripStore from "../../stores/tripStore";

const TripList = ({ navigation }) => {
  if (tripStore.loading) return <Spinner />;
  const tripsList = tripStore.trips.map((trip) => (
    <TripItem trip={trip} key={trip.id} navigation={navigation} />
  ));
  return (
    <ListWrapper>
      <List>{tripsList}</List>
    </ListWrapper>
  );
};

export default observer(TripList);
