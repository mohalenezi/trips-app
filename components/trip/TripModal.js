import React, { useState } from "react";

import {
  AuthTitle,
  AuthContainer,
  AuthTextInput,
  AuthButtonText,
  AuthButton,
} from "./styles";

//observer
import { observer } from "mobx-react";

import tripStore from "../../stores/tripStore";

const TripModal = ({ navigation }) => {
  const [trip, setTrip] = useState({
    title: "",
    description: "",
    image: "",
  });
  const handleSubmit = async () => {
    // console.log(trip);
    await tripStore.createTrip(trip);
    navigation.navigate("TripList");
  };
  return (
    <AuthContainer>
      <AuthTitle>Add A Trip</AuthTitle>
      <AuthTextInput
        placeholder="title"
        autoCapitalize="none"
        onChangeText={(title) => setTrip({ ...trip, title })}
      />
      <AuthTextInput
        placeholder="description"
        autoCapitalize="none"
        onChangeText={(description) => setTrip({ ...trip, description })}
      />
      <AuthTextInput
        placeholder="image's link"
        autoCapitalize="none"
        onChangeText={(image) => setTrip({ ...trip, image })}
      />
      <AuthButton
        onPress={(() => navigation.navigate("TripList"), handleSubmit)}
      >
        <AuthButtonText>Add</AuthButtonText>
      </AuthButton>
    </AuthContainer>
  );
};

export default observer(TripModal);
