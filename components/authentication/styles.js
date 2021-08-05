import styled from "styled-components/native";

export const AuthBackground = styled.ImageBackground`
  width: 100%;
  height: 100%;
  flex: 1;
`;

export const AuthContainer = styled.View`
  flex: 1;
  align-self: stretch;
  justify-content: center;
  align-items: center;
  padding-right: 60px;
  padding-left: 60px;
  background-color: rgba(0, 0, 0, 0.71);
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
  background-color: rgba(0, 0, 0, 0.71);
  color: white;
  border-bottom-color: ${(props) => props.theme.mainColor};
  border-bottom-width: 1px;
`;

export const AuthButton = styled.TouchableOpacity`
  align-self: stretch;
  align-items: center;
  border-radius: 10px;
  padding: 20px;
  background-color: #b7b7a4;
  margin-top: 30px;
`;

export const AuthButtonText = styled.Text`
  color: #fcfdff;
  font-weight: bold;
  font-size: 18px;
`;

export const AuthOther = styled.Text`
  color: ${(props) => props.theme.pink};
  margin-top: 15px;
`;
