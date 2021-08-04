import React, { useEffect } from "react";
//observer
import { observer } from "mobx-react";
import { configure } from "mobx";

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
  // I love that you guys are using useEffect but why are using it?
  useEffect(() => {
    tripStore.fetchTrips();
  }, []);
  if (tripStore.loading) return <Spinner />;

  //👇🏻I think you mean tripStore.trips?.map right?
  const tripsList = tripStore?.trips.map((trip) => (
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
