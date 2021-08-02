import React from "react";
import { Text } from "react-native";
import profileStore from "../../stores/profileStore";
import authStore from "../../stores/authStore";

const ProfileDetail = ({ route }) => {
  const { userId } = route.params;
  //   console.log(userId);
  let profile = profileStore.getProfileById(userId);

  console.log(profile);

  return <Text>Profile</Text>;
};

export default ProfileDetail;
