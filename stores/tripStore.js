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

  createTrip = async (newTrip) => {
    try {
      const response = await instance.post("/trips", newTrip);
      response.data.trips = [];
      this.trips.push(response.data);
    } catch (error) {
      console.error(error);
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
