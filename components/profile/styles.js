import styled from "styled-components/native";

export const ListWrapper = styled.View`
  background-color: #b7b7a4;
`;

export const TextInputStyled = styled.TextInput`
  align-self: stretch;
  text-align: left;
  height: 40px;
  margin-bottom: 30px;
  color: ${(props) => props.theme.mainColor};
  border-bottom-color: ${(props) => props.theme.mainColor};
  border-bottom-width: 1px;
`;

export const AuthContainer = styled.View`
  flex: 1;
  align-self: stretch;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.backgroundColor};
  padding-right: 60px;
  padding-left: 60px;
`;

export const HomeBackground = styled.ImageBackground`
  width: 100%;
  height: 100%;
  flex: 1;
`;

export const OverlayContainer = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.71);
`;

export const AuthTitle = styled.Text`
  color: #6b705c;
  font-size: 24px;
  margin-bottom: 20px;
  border-bottom-color: ${(props) => props.theme.pink};
`;

export const AuthTextInput = styled.TextInput`
  align-self: stretch;
  text-align: left;
  height: 40px;
  margin-bottom: 30px;
  color: ${(props) => props.theme.mainColor};
  border-bottom-color: ${(props) => props.theme.mainColor};
  border-bottom-width: 1px;
`;

export const AuthButton = styled.TouchableOpacity`
  align-self: stretch;
  align-items: center;
  border-radius: 10px;
  padding: 20px;
  background-color: #6b705c;
  margin-top: 30px;
`;

export const AuthButtonText = styled.Text`
  color: #b7b7a4;
  font-weight: bold;
  font-size: 18px;
`;

export const ItemTextStyled = styled.Text`
  font-weight: 500;
  font-size: 20px;
  margin-left: 10px;
`;
export const TextStyled = styled.Text`
  font-weight: 600;
  font-size: 30px;
  margin-left: 10px;
`;

export const NameStyled = styled.Text`
  padding: 10px;
  padding-top: 30px;
  padding-bottom: 20px;
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  border-width: 30px;
  border-color: #b7b7a4;
  background-color: #1b4332;
`;
export const BioStyled = styled.Text`
  margin-left: 1%;
  margin-top: 3%;
  margin-bottom: 3%;
  font-size: 20px;
  font-style: italic;
  text-align: justify;
`;
