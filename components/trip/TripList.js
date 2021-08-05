import React, { useEffect } from "react";
//observer
import { observer } from "mobx-react";
import { configure } from "mobx";

//native-base
import { List, Spinner, Box } from "native-base";
import { Button } from "galio-framework";
// components
import TripItem from "./TripItem";

//stores
import tripStore from "../../stores/tripStore";
import authStore from "../../stores/authStore";

import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import { Text } from "galio-framework";
import { flex } from "styled-system";
//to fix warning for mobx observer!
configure({
  enforceActions: "never",
});

const TripList = ({ navigation }) => {
  useEffect(() => {
    tripStore.fetchTrips();
  }, []);
  if (tripStore.loading) return <Spinner />;
  const tripsList = tripStore?.trips
    .filter((trip) => trip.userId !== authStore.user.id)
    .map((trip) => (
      <TripItem trip={trip} key={trip.id} navigation={navigation} />
    ));

  return (
    <>
      <ScrollView>
        <List>{tripsList}</List>
      </ScrollView>
      <Box style={styles.container}>
        <Button
          onlyIcon
          icon="pluscircleo"
          iconFamily="antdesign"
          iconSize={50}
          color="#50D050"
          iconColor="#fff"
          style={{ width: 60, height: 60 }}
          onPress={() => navigation.navigate("AddModal")}
        ></Button>
      </Box>
    </>
  );
};

export default observer(TripList);

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 30,
    right: 20,
  },
});
