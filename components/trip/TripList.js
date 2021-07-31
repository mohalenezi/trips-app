import React from "react";

//native-base
import { Button, List, Spinner } from "native-base";

// components
import TripItem from "./TripItem";

//observer
import { observer } from "mobx-react";

//stores
import tripStore from "../../stores/tripStore";

import { SafeAreaView, ScrollView } from "react-native";

const TripList = ({ navigation }) => {
  if (tripStore.loading) return <Spinner />;
  const tripsList = tripStore.trips.map((trip) => (
    <TripItem trip={trip} key={trip.id} navigation={navigation} />
  ));
  return (
    <SafeAreaView>
      <ScrollView>
        <List>{tripsList}</List>
        <Button onPress={() => navigation.navigate("TripModal")}>
          Add a trip
        </Button>
      </ScrollView>
    </SafeAreaView>
  );
};

export default observer(TripList);
