import { Button } from "native-base";
import React from "react";
import { Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ProfileButton = ({ userId }) => {
  const navigation = useNavigation();

  return (
    <Button onPress={() => navigation.navigate("ProfileDetail", { userId })}>
      <Text>Go to their profile</Text>
    </Button>
  );
};

export default ProfileButton;
