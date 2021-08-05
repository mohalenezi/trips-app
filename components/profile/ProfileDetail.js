import { observer } from "mobx-react";
import { Box, Spacer } from "native-base";
import { Button } from "galio-framework";

import React, { useEffect } from "react";
import {
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
  SafeAreaView,
} from "react-native";
import authStore from "../../stores/authStore";
import profileStore from "../../stores/profileStore";
import { ListWrapper } from "../trip/styles";
import ProfileTripList from "./ProfileTripList";
import { NameStyled, BioStyled } from "./styles";
const ProfileDetail = ({ route, navigation }) => {
  useEffect(() => {
    profileStore.fetchProfiles();
  }, []);
  const { userId } = route.params;
  let profile = profileStore.getProfileById(userId);

  return (
    <>
      <SafeAreaView style={{ flex: -1, backgroundColor: "#b7b7a4" }} />
      <SafeAreaView style={{ flex: -4, backgroundColor: "#b7b7a4" }}>
        <ScrollView>
          <ListWrapper>
            <Box style={styles.container}>
              <Image
                source={{ uri: profile?.image }}
                style={{ width: Dimensions.get("window").width, height: 400 }}
              />
            </Box>
            <NameStyled>{profile?.username}</NameStyled>
            <BioStyled>{profile?.bio}</BioStyled>
            <ProfileTripList userId={userId} />
            {authStore.user.id === userId && (
              <Box style={styles.container2}>
                <Button
                  round
                  size="small"
                  color="#588157"
                  onPress={() =>
                    navigation.navigate("ProfileUpdateModal", {
                      oldProfile: profile,
                    })
                  }
                >
                  Edit profile
                </Button>
                <Button
                  style={styles.signoutButton}
                  onPress={() => {
                    authStore.signout();
                    navigation.goBack("Home");
                  }}
                >
                  Sign out
                </Button>
              </Box>
            )}
          </ListWrapper>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default observer(ProfileDetail);

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
  bio: {
    fontSize: 20,
  },
  container2: {
    justifyContent: "center",
    alignItems: "center",
  },
  signoutButton: {
    backgroundColor: "red",
    marginTop: 10,
    marginBottom: 10,
  },
});
