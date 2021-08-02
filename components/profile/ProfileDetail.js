import { observer } from "mobx-react";
import { Button } from "native-base";
import React, { useEffect } from "react";
import { Text } from "react-native";
import profileStore from "../../stores/profileStore";

const ProfileDetail = ({ route, navigation }) => {
  useEffect(() => {
    profileStore.fetchProfiles();
  }, []);
  const { userId } = route.params;
  let profile = profileStore.getProfileById(userId);

  return (
    <>
      <Text>{profile?.username}</Text>
      <Text>{profile?.bio}</Text>
      <Button
        onPress={() =>
          navigation.navigate("ProfileUpdateModal", { oldProfile: profile })
        }
      >
        Update
      </Button>
    </>
  );
};

export default observer(ProfileDetail);
