import React from "react";
import { StyleSheet } from "react-native";

import {
  HomeBackground,
  OverlayContainer,
  HomeUpText,
  Title,
  BottomStyling,
  ButtonStyling,
} from "../styles";
import { Input, Block } from "galio-framework";
const Home = ({ navigation }) => {
  return (
    <HomeBackground
      source={{
        uri: "https://wallpaperaccess.com/full/300911.jpg",
      }}
    >
      <OverlayContainer>
        <HomeUpText>
          <Title>Trips</Title>
        </HomeUpText>
        <BottomStyling>
          <ButtonStyling onPress={() => navigation.navigate("Signin")}>
            Let the Journey Begin
          </ButtonStyling>
        </BottomStyling>
      </OverlayContainer>
    </HomeBackground>
  );
};

export default Home;
