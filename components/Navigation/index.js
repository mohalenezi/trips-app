import React, { useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";

//components
import Home from "../Home";
import TripList from "../trip/TripList";
import Signup from "../authentication/Signup";
import Signin from "../authentication/Signin";
import SignoutButton from "../buttons/SignoutButton";
import profileStore from "../../stores/profileStore";
import tripStore from "../../stores/tripStore";

import TripModal from "../trip/TripModal";
import AddModal from "../trip/AddModal";
import TripDetail from "../trip/TripDetail";
import ProfileDetail from "../profile/ProfileDetail";
import ProfileUpdateModal from "../profile/ProfileUpdateModal";
import OwnProfileButton from "../buttons/OwnProfileButton";

const Stack = createStackNavigator();

export default RootNavigator = () => {
  useEffect(() => {
    profileStore.fetchProfiles();
  }, []);
  useEffect(() => {
    tripStore.fetchTrips();
  }, []);
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#6b705c",
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
          headerRight: () => <OwnProfileButton />,
          headerLeft: null,
          gestureEnabled: false, //not going to be able to go to home when you swipe
        }}
      />
      <Stack.Screen
        name="TripDetail"
        component={TripDetail}

        options={({ route }) => {
          const { trip } = route.params;
          const profile = profileStore.getProfileById(trip.userId);
          return {
            title: trip.title,
            headerRight: () => <OwnProfileButton />,
          };
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
      <Stack.Screen
        name="ProfileDetail"
        component={ProfileDetail}
        options={({ route }) => {
          const { userId } = route.params;
          let profile = profileStore.getProfileById(userId);
          return {
            title: profile.username,
          };
        }}
      />
      <Stack.Screen name="TripModal" component={TripModal} />
      <Stack.Screen name="ProfileUpdateModal" component={ProfileUpdateModal} />
      <Stack.Screen name="AddModal" component={AddModal} />
    </Stack.Navigator>
  );
};
