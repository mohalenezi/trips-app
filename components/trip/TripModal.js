import React, { useState } from "react";

import {
  AuthTitle,
  AuthContainer,
  AuthTextInput,
  AuthButtonText,
  AuthButton,
} from "./styles";
import { Input, Block } from "galio-framework";

//observer
import { observer } from "mobx-react";

import tripStore from "../../stores/tripStore";

const TripModal = ({ navigation, route }) => {
  const { oldTrip } = route.params;
  const [trip, setTrip] = useState(oldTrip);

  const handleSubmit = async () => {
    await tripStore.tripUpdate(trip);
    // navigation.navigate("TripList");
    navigation.goBack(null);
  };
  return (
    <AuthContainer>
      <AuthTitle>Update Trip</AuthTitle>
      <Input
        placeholder="title"
        defaultValue={oldTrip.title}
        autoCapitalize="none"
        onChangeText={(title) => setTrip({ ...trip, title })}
        style={{ borderColor: "green" }}
        bottomHelp
        placeholderTextColor="#4F8EC9"
      />
      <Input
        placeholder="description"
        defaultValue={oldTrip.description}
        autoCapitalize="none"
        onChangeText={(description) => setTrip({ ...trip, description })}
        style={{ borderColor: "green" }}
        help="Add your description!"
        bottomHelp
        placeholderTextColor="#4F8999"
      />
      <Input
        placeholder="image's link"
        defaultValue={oldTrip.image}
        autoCapitalize="none"
        onChangeText={(image) => setTrip({ ...trip, image })}
        style={{ borderColor: "green" }}
        help="Add your image!"
        bottomHelp
        placeholderTextColor="#4F8999"
      />

      <AuthButton onPress={handleSubmit}>
        <AuthButtonText>Update</AuthButtonText>
      </AuthButton>
    </AuthContainer>
  );
};

export default observer(TripModal);
