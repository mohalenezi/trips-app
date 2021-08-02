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
      <AuthTextInput
        placeholder="Bio"
        defaultValue={oldProfile.bio}
        autoCapitalize="none"
        onChangeText={(bio) => setProfile({ ...profile, bio })}
      />
      <AuthTextInput
        placeholder="image's link"
        defaultValue={oldProfile.image}
        autoCapitalize="none"
        onChangeText={(image) => setProfile({ ...profile, image })}
      />
      <AuthButton onPress={handleSubmit}>
        <AuthButtonText>Update</AuthButtonText>
      </AuthButton>
    </AuthContainer>
  );
};

export default observer(ProfileUpdateModal);
