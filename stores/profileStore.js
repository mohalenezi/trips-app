import { makeAutoObservable } from "mobx";

import instance from "./instance";

class ProfileStore {
  profiles = [];
  loading = true;

  constructor() {
    makeAutoObservable(this);
  }

  fetchProfiles = async () => {
    try {
      const response = await instance.get("/profiles");
      this.profiles = response.data;
      this.loading = false;
    } catch (error) {
      console.log("fetchProfiles: ", error);
    }
  };

  //   createTrip = async (newTrip) => {
  //     try {
  //       const response = await instance.post("/trips", newTrip);
  //       response.data.trips = [];
  //       this.profiles.push(response.data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  profileUpdate = async (updateProfile) => {
    console.log(updateProfile);
    try {
      const response = await instance.put(
        `/profiles/${updateProfile.id}`,
        updateProfile
      );
      // response.data.trips = oldTrip;
      const profile = this.profiles.find(
        (profile) => profile.id === response.data.id
      );

      for (const key in profile) profile[key] = response.data[key];
      console.log(profile);
    } catch (error) {
      console.log(error);
    }
  };

  //   deleteTrip = async (tripId) => {
  //     try {
  //       await instance.delete(`/trips/${tripId}`);

  //       const updatedTrips = this.profiles.filter((trip) => trip.id !== tripId);
  //       this.profiles = updatedTrips;
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   getTripById = (tripId) => this.profiles.find((trip) => trip.id === tripId);

  getProfileById = (userId) =>
    this.profiles.find((profile) => profile.userId === +userId);
}

const profileStore = new ProfileStore();
profileStore.fetchProfiles();
export default profileStore;
