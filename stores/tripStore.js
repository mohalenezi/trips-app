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

  tripUpdate = async (updateTrip) => {
    console.log(updateTrip);
    try {
      const response = await instance.put(
        `/trips/${updateTrip.id}`,
        updateTrip
      );
      // response.data.trips = oldTrip;
      const trip = this.trips.find((trip) => trip.id === response.data.id);

      for (const key in trip) trip[key] = response.data[key];
      console.log(trip);
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
