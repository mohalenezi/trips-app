import React from "react";
//observer
import { observer } from "mobx-react";
import { configure } from "mobx";

import React, { useEffect } from "react";


//native-base
import { Button, List, Spinner } from "native-base";

// components
import TripItem from "./TripItem";

//stores
import tripStore from "../../stores/tripStore";

import { SafeAreaView, ScrollView } from "react-native";

//to fix warning for mobx observer!
configure({
  enforceActions: "never",
});

const TripList = ({ navigation }) => {
  if (tripStore.loading) return <Spinner />;
  console.log(tripStore.trips);
  const Trips = tripStore?.trips;
  const tripsList = Trips.map((trip) => (
    <TripItem trip={trip} key={trip.id} navigation={navigation} />
  ));

  return (
    <SafeAreaView>
      <ScrollView>
        <List>{tripsList}</List>
        <Button onPress={() => navigation.navigate("AddModal")}>
          Add a trip
        </Button>
      </ScrollView>
    </SafeAreaView>
  );
};

export default observer(TripList);
