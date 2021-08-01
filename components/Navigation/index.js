import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//components
import Home from "../Home";
import TripList from "../trip/TripList";
import Signup from "../authentication/Signup";
import Signin from "../authentication/Signin";
import SignoutButton from "../buttons/SignoutButton";
import TripModal from "../trip/TripModal";
import TripDetail from "../trip/TripDeatil";
const Stack = createStackNavigator();

export default RootNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#90d4ed",
        },
        headerTintColor: "white",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="TripList"
        component={TripList}
        options={{
          title: "Explore",
          headerRight: () => <SignoutButton />,
        }}
      />
      <Stack.Screen
        name="TripDetail"
        component={TripDetail}
        options={{
          headerRight: () => <SignoutButton />,
        }}
      />
      <Stack.Screen
        name="Signin"
        component={Signin}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="TripModal" component={TripModal} />
    </Stack.Navigator>
  );
};
