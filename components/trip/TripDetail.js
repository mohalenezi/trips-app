import { Flex, Spacer, Spinner, Box } from "native-base";
import { Button } from "galio-framework";
import React, { useEffect } from "react";
import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  ScrollView,
} from "react-native";
import authStore from "../../stores/authStore";
import tripStore from "../../stores/tripStore";
import {
  TitleStyled,
  DescrpStyled,
  ImageTrp,
  BtnContainer,
  ImgContainer,
} from "./styles";
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
      <ScrollView>
        <ImgContainer>
          <ImageTrp
            source={{ uri: trip.image }}
            style={{ width: imageWidth, height: imageHeight }}
          />
        </ImgContainer>
        <TitleStyled>{trip.title}</TitleStyled>
        <DescrpStyled>{trip.description}</DescrpStyled>
        {/* <TextStyled>{profile.username}</TextStyled> */}

        <>
          <ProfileButton userId={trip.userId} />

          {authStore.user.id === trip.userId && (
            <View style={{ flex: "1" }}>
              <Flex h={40} w={80} mt={10}>
                <Button
                  onlyIcon
                  icon="form"
                  iconFamily="antdesign"
                  iconSize={30}
                  color="#50D050"
                  iconColor="#fff"
                  style={styles.ButtonStyle2}
                  onPress={handelUpdate}
                  oldTrip={trip}
                ></Button>

                <Button
                  onlyIcon
                  icon="delete"
                  iconFamily="antdesign"
                  iconSize={30}
                  color="#FF0000"
                  iconColor="#fff"
                  style={styles.ButtonStyle}
                  onPress={handleDelete}
                ></Button>

                <Spacer />
              </Flex>
            </View>
          )}
        </>
      </ScrollView>
    </View>
  );
};

export default observer(TripDetail);

const styles = StyleSheet.create({
  ButtonStyle: {
    width: 40,
    height: 40,
    bottom: 10,
    right: 80,
    position: "absolute",
  },
  ButtonStyle2: {
    width: 40,
    height: 40,
    bottom: 10,
    left: 10,
    position: "absolute",
  },
});
