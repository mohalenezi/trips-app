import React, { useState } from "react";

import {
  AuthTitle,
  AuthContainer,
  AuthTextInput,
  AuthButtonText,
  AuthButton,
  AuthOther,
  AuthBackground,
} from "./styles";
import { Input, Block } from "galio-framework";

//observer
import { observer } from "mobx-react";

import authStore from "../../stores/authStore";

const Signup = ({ navigation }) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const handleSubmit = async () => {
    await authStore.signup(user, navigation);
  };
  return (
    <AuthBackground
      source={{
        uri: "https://wallpaperaccess.com/full/300911.jpg",
      }}
      blurRadius={5}
    >
      <AuthContainer>
        <AuthTitle>Sign up</AuthTitle>

        <Input
          placeholderTextColor="grey"
          placeholder="username"
          autoCapitalize="none"
          onChangeText={(username) => setUser({ ...user, username })}
          rounded
        />

        <Input
          placeholderTextColor="grey"
          placeholder="password"
          autoCapitalize="none"
          secureTextEntry={true}
          onChangeText={(password) => setUser({ ...user, password })}
          password
          viewPass
        />
        <AuthButton onPress={handleSubmit}>
          <AuthButtonText>Sign up</AuthButtonText>
        </AuthButton>
        <AuthOther onPress={() => navigation.navigate("Signin")}>
          Click here to sign in
        </AuthOther>
      </AuthContainer>
    </AuthBackground>
  );
};

export default observer(Signup);
