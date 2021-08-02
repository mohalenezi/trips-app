import { Button, Flex, Spacer, Spinner } from "native-base";
import React, { useEffect } from "react";
import { View, Text, Image, Dimensions } from "react-native";
import authStore from "../../stores/authStore";
import tripStore from "../../stores/tripStore";
import { TextStyled } from "./styles";
import ProfileButton from "../buttons/ProfileButton";
import profileStore from "../../stores/profileStore";

const TripDetail = ({ route, navigation }) => {
  useEffect(() => {
    tripStore.fetchTrips();
  }, []);

  const dimensions = Dimensions.get("window");
  const imageHeight = Math.round(dimensions.height / 2);
  const imageWidth = dimensions.width;
  const { trip } = route.params;

  const profile = profileStore.getProfileById(trip.userId);
  console.log(profile?.username);

  const handleDelete = () => {
    tripStore.deleteTrip(trip.id);
    navigation.goBack("TripList");
  };
  if (tripStore.loading || profileStore.loading) return <Spinner />;
  return (
    <View>
      <Image
        source={{ uri: trip.image }}
        style={{ width: imageWidth, height: imageHeight }}
      />
      <TextStyled>{trip.title}</TextStyled>
      <Text>{trip.description}</Text>
      {/* <TextStyled>{profile.username}</TextStyled> */}

      <ProfileButton userId={trip.userId} />
      {authStore.user && (
        <>
          <View style={{ flex: "1" }}>
            <Flex h={40} w={80} mt={10}>
              <Button
                onPress={() =>
                  navigation.navigate("TripModal", { oldTrip: trip })
                }
              >
                Update
              </Button>
              <Spacer />
              <Button onPress={handleDelete}>Delete</Button>
              <Spacer />
            </Flex>
          </View>
        </>
      )}
    </View>
  );
};

export default TripDetail;
