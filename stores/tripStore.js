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

  getTripById = (tripId) => this.trips.find((trip) => trip.id === tripId);
}

const tripStore = new TripStore();
tripStore.fetchTrips();

export default tripStore;
