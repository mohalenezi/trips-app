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

const AddModal = ({ navigation }) => {
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
      <Input
        placeholder="title"
        autoCapitalize="none"
        onChangeText={(title) => setTrip({ ...trip, title })}
        style={{ borderColor: "green" }}
        bottomHelp
        placeholderTextColor="#4F8EC9"
      />
      <Input
        placeholder="description"
        autoCapitalize="none"
        onChangeText={(description) => setTrip({ ...trip, description })}
        style={{ borderColor: "green" }}
        help="Add your description!"
        bottomHelp
        placeholderTextColor="#4F8999"
      />
      <Input
        placeholder="image's link"
        autoCapitalize="none"
        onChangeText={(image) => setTrip({ ...trip, image })}
        style={{ borderColor: "green" }}
        help="Add your image!"
        bottomHelp
        placeholderTextColor="#4F8999"
      />

      <AuthButton
        onPress={(() => navigation.navigate("TripList"), handleSubmit)}
      >
        <AuthButtonText>Add</AuthButtonText>
      </AuthButton>
    </AuthContainer>
  );
};

export default observer(AddModal);
