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
export const ItemOwnerStyled = styled.Text`
  font-weight: 500;
  font-size: 15px;
  margin-left: 10px;
`;
export const TextStyled = styled.Text`
  font-weight: 600;
  font-size: 30px;
  margin-left: 10px;
`;
export const ImgContainer = styled.View`
  flex: 1;
  align-self: center;
  display: flex;
  height: 200px;
  width: 200px;
  align-items: center;
  padding-right: 60px;
  padding-left: 60px;
`;
export const ImageTrp = styled.Image`
  width: 200px;
  height: 100px;
  margin-top: 10px;
  padding: 10px;
  padding-bottom: 500px;
  text-align: center;
  border-radius: 15px;
  border-width: 10px;
  border-color: #1b4332;
  flex: 1;
`;
export const TitleStyled = styled.Text`
  margin-top: 90%;
  padding: 10px;
  padding-top: 30px;
  padding-bottom: 20px;
  font-size: 30px;
  text-align: center;
  background-color: #b7b7a4;
  border-radius: 10px;
  border-width: 10px;
  border-style: dotted;
  border-color: #1b4332;
  background: #b7b7a4;
  font-weight: bold;
`;
export const DescrpStyled = styled.Text`
  margin-top: 2%;
  margin-left: 2%;
  margin-right: 2%;
  font-size: 25px;
  text-align: justify;
  background-color: rgba(0, 40, 0, 0.6);
`;

export const BtnContainer = styled.View`
  flex: 1;
  align-self: stretch;
  justify-content: center;
  align-items: center;
  padding-right: 60px;
  padding-left: 60px;
`;
