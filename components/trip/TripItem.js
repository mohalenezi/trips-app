import React, { useState, useEffect } from "react";
//observer
import { observer } from "mobx-react";
import { Card } from "galio-framework";

//react-native
import { Text, Image, StyleSheet } from "react-native";
//native-base
import { List, Box, Container, Center } from "native-base";
import { ItemTextStyled, ItemOwnerStyled } from "./styles";

import authStore from "../../stores/authStore";
import profileStore from "../../stores/profileStore";
import ProfileTripList from "../profile/ProfileTripList";
import { alignContent, marginLeft } from "styled-system";

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
      <Box style={styles.container}>
        <Card
          flex
          borderless
          style={styles.card}
          title={trip.title}
          titleColor={"#283618"}
          caption={profile?.username}
          captionColor={"#588157"}
          location={trip.title}
          locationColor={"#588157"}
          avatar={profile?.image}
          imageStyle={styles.image}
          imageBlockStyle={{ width: 400, alignitem: Center, marginLeft: 20 }}
          image={trip.image}
        />
      </Box>
    </List.Item>
  );
};

export default observer(TripItem);

const styles = StyleSheet.create({
  image: {
    width: 380,
    height: 300,
    borderRadius: 100 / 2,
    overflow: "hidden",
    borderWidth: 3,
    borderColor: "#ffe8d6",
  },
  card: {
    width: 400,
    height: 400,
    paddingBottom: 1,
    paddingVertical: 20,
    borderRadius: 100 / 2,
    overflow: "hidden",
    borderWidth: 3,
    borderColor: "#588157",
    backgroundColor: "#ffe8d6",
    alignItems: "center",
  },
  container: {
    width: 400,
    margin: 10,
    justifyContent: "center",
  },
  title: {
    color: "red",
  },
});
