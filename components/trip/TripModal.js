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
import UpdateButton from "../buttons/UpdateButton";

import tripStore from "../../stores/tripStore";

const TripModal = ({ navigation, route }) => {

  const { oldTrip } = route.params;
  // const oldTrip = { title, description, image };
  const [trip, setTrip] = useState(oldTrip);
  
  const handleSubmit = async () => {
    await tripStore.tripUpdate(trip);
    navigation.navigate("TripList");
  };
  return (
    <AuthContainer>
      <AuthTitle>Add A Trip</AuthTitle>
      <AuthTextInput
        placeholder="title"
        defaultValue={oldTrip.title}
        autoCapitalize="none"
        onChangeText={(title) => setTrip({ ...trip, title })}
      />
      <AuthTextInput
        placeholder="description"
        defaultValue={oldTrip.description}
        autoCapitalize="none"
        onChangeText={(description) => setTrip({ ...trip, description })}
      />
      <AuthTextInput
        placeholder="image's link"
        defaultValue={oldTrip.image}
        autoCapitalize="none"
        onChangeText={(image) => setTrip({ ...trip, image })}
      />
      <AuthButton
        onPress={(() => navigation.navigate("TripList"), handleSubmit)}
      >
        <AuthButtonText>Add</AuthButtonText>
      </AuthButton>
      <AuthButton>
        <UpdateButton />
      </AuthButton>
    </AuthContainer>
  );
};

export default observer(TripModal);
