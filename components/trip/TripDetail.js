import { Button, Flex, Spacer, Spinner } from "native-base";
import React, { useEffect } from "react";
import { View, Text, Image, Dimensions } from "react-native";
import authStore from "../../stores/authStore";
import tripStore from "../../stores/tripStore";
import { TextStyled } from "./styles";
import ProfileButton from "../buttons/ProfileButton";
import profileStore from "../../stores/profileStore";
import { AntDesign } from "@expo/vector-icons";
import styled from "styled-components";
//observer
import { observer } from "mobx-react";

const UpdateButtonStyled = styled(AntDesign)`
  color: green;
  margin-left: 60px;
`;
const DeleteButtonStyled = styled(AntDesign)`
  color: red;
  margin-left: 60px;
`;

const TripDetail = ({ route, navigation }) => {
  useEffect(() => {
    tripStore.fetchTrips();
  }, []);

  const dimensions = Dimensions.get("window");
  const imageHeight = Math.round(dimensions.height / 2);
  const imageWidth = dimensions.width;
  const { trip } = route.params;
  console.log(trip);
  const profile = profileStore.getProfileById(trip.userId);
  console.log(profile?.username);

  const handelUpdate = () => {
    navigation.navigate("TripModal", { oldTrip: trip });
  };

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
      {authStore.user.id === trip.userId && (
        <>
          <View style={{ flex: "1" }}>
            <Flex h={40} w={80} mt={10}>
              <UpdateButtonStyled
                name="form"
                size={35}
                onPress={handelUpdate}
                oldTrip={trip}
              />

              <Spacer />
              <>
                <DeleteButtonStyled
                  name="delete"
                  size={35}
                  onPress={handleDelete}
                />
              </>
              <Spacer />
            </Flex>
          </View>
        </>
      )}
    </View>
  );
};

export default observer(TripDetail);
