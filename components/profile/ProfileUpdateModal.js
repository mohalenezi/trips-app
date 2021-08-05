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

import profileStore from "../../stores/profileStore";

const ProfileUpdateModal = ({ navigation, route }) => {
  const { oldProfile } = route.params;
  const [profile, setProfile] = useState(oldProfile);

  const handleSubmit = async () => {
    await profileStore.profileUpdate(profile);
    navigation.replace("ProfileDetail", { userId: oldProfile.userId });
  };
  return (
    <AuthContainer>
      <AuthTitle>Update Profile</AuthTitle>
      <Input
        placeholder="Bio"
        defaultValue={oldProfile.bio}
        autoCapitalize="none"
        onChangeText={(bio) => setProfile({ ...profile, bio })}
        style={{ borderColor: "green" }}
        bottomHelp
        placeholderTextColor="#4F8EC9"
      />
      <Input
        placeholder="image's link"
        defaultValue={oldProfile.image}
        autoCapitalize="none"
        onChangeText={(image) => setProfile({ ...profile, image })}
        style={{ borderColor: "green" }}
        bottomHelp
        placeholderTextColor="#4F8EC9"
      />

      <AuthButton onPress={handleSubmit}>
        <AuthButtonText>Update</AuthButtonText>
      </AuthButton>
    </AuthContainer>
  );
};

export default observer(ProfileUpdateModal);
