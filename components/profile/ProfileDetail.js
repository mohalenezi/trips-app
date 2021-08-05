import { observer } from "mobx-react";
import { Box, Button } from "native-base";
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
import ProfileTripList from "./ProfileTripList";

const ProfileDetail = ({ route, navigation }) => {
  useEffect(() => {
    profileStore.fetchProfiles();
  }, []);
  const { userId } = route.params;
  let profile = profileStore.getProfileById(userId);

  return (
    <SafeAreaView>
      <ScrollView>
        <Box style={styles.container}>
          <Image
            source={{ uri: profile?.image }}
            style={{ width: Dimensions.get("window").width, height: 400 }}
          />
        </Box>
        <Text style={styles.title}>{profile?.username}</Text>
        <Text style={styles.bio}>{profile?.bio}</Text>
        <ProfileTripList userId={userId} />
        {authStore.user.id === userId && (
          <>
            <Button
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
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

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
  signoutButton: {
    backgroundColor: "red",
    marginTop: 10,
    marginBottom: 10,
  },
});

export default observer(ProfileDetail);
