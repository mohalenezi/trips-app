import { Button, Flex, Spacer } from "native-base";
import React from "react";
import { View, Text, Image, Dimensions } from "react-native";
import authStore from "../../stores/authStore";
import tripStore from "../../stores/tripStore";
import { TextStyled } from "./styles";

const TripDetail = ({ route, navigation }) => {
  const dimensions = Dimensions.get("window");
  const imageHeight = Math.round(dimensions.height / 2);
  const imageWidth = dimensions.width;
  const { trip } = route.params;

  const handleDelete = () => {
    tripStore.deleteTrip(trip.id);
    navigation.goBack("TripList");
  };
  return (
    <View>
      <Image
        source={{ uri: trip.image }}
        style={{ width: imageWidth, height: imageHeight }}
      />
      <TextStyled>{trip.title}</TextStyled>
      <Text>{trip.description}</Text>
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
