import styled from "styled-components/native";

export const HomeBackground = styled.ImageBackground`
  width: 100%;
  height: 100%;
  flex: 1;
`;

export const OverlayContainer = styled.View`
  flex: 1;
  background-color: rgba(0, 9, 50, 0.6);
`;

export const HomeUpText = styled.View`
  height: 40%;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 38px;
  text-align: center;
`;

export const BottomStyling = styled.View`
  height: 50%;
  align-items: center;
  justify-content: center;
`;

export const ButtonStyling = styled.Text`
  color: ${(props) => props.theme.backgroundColor};
  font-size: 22px;
`;
