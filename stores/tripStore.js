import { makeAutoObservable } from "mobx";

import instance from "./instance";

class TripStore {
  trips = [];
  loading = true;

  constructor() {
    makeAutoObservable(this);
  }

  fetchTrips = async () => {
    try {
      const response = await instance.get("/trips");
      this.trips = response.data;
      this.loading = false;
    } catch (error) {
      console.log("fetchTrips: ", error);
    }
  };

  createTrip = async (newTrip, navigation) => {
    try {
      const formData = new FormData(); //added form data by enezi and i have uploaded an image
      for (const key in newTrip) formData.append(key, newTrip[key]);
      const response = await instance.post("/trips", formData);
      response.data.trips = [];
      this.trips.push(response.data);

      console.log(response.data);
      navigation.navigate("ProfileDetail", { userId: response.data.userId });
    } catch (error) {
      console.error(error);
    }
  };

  tripUpdate = async (updateTrip, navigation) => {
    console.log(updateTrip);
    try {
      const response = await instance.put(
        `/trips/${updateTrip.id}`,
        updateTrip
      );
      // response.data.trips = oldTrip;
      const trip = this.trips.find((trip) => trip.id === response.data.id);

      for (const key in trip) trip[key] = response.data[key];
      // console.log(trip);
      navigation.replace("TripDetail", { trip: trip });
    } catch (error) {
      console.log(error);
    }
  };

  deleteTrip = async (tripId) => {
    try {
      await instance.delete(`/trips/${tripId}`);

      const updatedTrips = this.trips.filter((trip) => trip.id !== tripId);
      this.trips = updatedTrips;
    } catch (error) {
      console.error(error);
    }
  };

  getTripById = (tripId) => this.trips.find((trip) => trip.id === tripId);
}

const tripStore = new TripStore();
tripStore.fetchTrips();
export default tripStore;
