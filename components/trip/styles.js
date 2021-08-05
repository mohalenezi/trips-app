import styled from "styled-components/native";

export const ListWrapper = styled.View`
  margin-top: 10%;
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
  color: ${(props) => props.theme.pink};
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
  padding: 20px;
  background-color: ${(props) => props.theme.blue};
  margin-top: 30px;
`;

export const AuthButtonText = styled.Text`
  color: #fcfdff;
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
  color: grey;
`;

export const ItemOwnerNameStyled = styled.Text`
  font-weight: bold;
`;

export const TextStyled = styled.Text`
  font-weight: 600;
  font-size: 30px;
  margin-left: 10px;
`;
