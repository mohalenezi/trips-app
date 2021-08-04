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

//stores
import authStore from "../../stores/authStore";

//observer
import { observer } from "mobx-react";

const Signin = ({ navigation }) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const handleSubmit = async () => {
    await authStore.signin(user);
    if (authStore.user) navigation.replace("TripList");
  };
  return (
    <AuthBackground
      source={{
        uri: "https://wallpaperaccess.com/full/300911.jpg",
      }}
      blurRadius={5}
    >
      <AuthContainer>
        <AuthTitle>Sign in</AuthTitle>
        <AuthTextInput
          placeholderTextColor="grey"
          placeholder="username"
          autoCapitalize="none"
          onChangeText={(username) => setUser({ ...user, username })}
        />
        <AuthTextInput
          placeholderTextColor="grey"
          placeholder="password"
          autoCapitalize="none"
          secureTextEntry={true}
          onChangeText={(password) => setUser({ ...user, password })}
        />
        <AuthButton onPress={handleSubmit}>
          <AuthButtonText>Sign in</AuthButtonText>
        </AuthButton>
        <AuthOther onPress={() => navigation.navigate("Signup")}>
          Click here to sign up
        </AuthOther>
      </AuthContainer>
    </AuthBackground>
  );
};

export default observer(Signin);
