import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import * as Location from "expo-location";
import * as Google from "expo-google-app-auth";
import MapView, { Marker } from "react-native-maps";
import Constants from "expo-constants";
import axios from "axios";

type Props = {
  token: string;
};

interface Directions {
  routes: [
    {
      legs: [
        {
          start_location: any;
          steps: [
            {
              travel_mode: string;
              duration: {
                text: string;
              };
              end_location: {
                lat: number;
                lng: number;
              };
            }
          ];
        }
      ];
    }
  ];
}


const Directions = ({ token }: Props) => {
  const [startPoint, setStartPoint] = useState<string | null>(null);
  const [endPoint, setEndPoint] = useState<string | null>(null);
  const [directions, setDirections] = useState<Directions | null>(null);
  const [arrivalTime, setArrivalTime] = useState(null);

  const getDirections = async () => {
    // Get the user's current location
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      return;
    }

    let location = await Location.getCurrentPositionAsync({
      accuracy: Location.Accuracy.High,
    });
    setStartPoint(`${location.coords.latitude},${location.coords.longitude}`);
    console.log(startPoint);

    // Make a request to the Google Directions API to get the directions to the station you're interested in
    const directionsResponse = await axios.get(
      `https://maps.googleapis.com/maps/api/directions/json?origin=${startPoint}&destination=${endPoint}&mode=transit&key=YOUR_API_KEY&access_token=${token}`
    );

    // Extract the transit information from the response
    const transitDetails =
      directionsResponse.data.routes[0].legs[0].steps[0].transit_details;

    // Get the arrival time for the bus or train going to the station you're interested in
    setArrivalTime(transitDetails.arrival_time.text);

    // Set the directions state variable to the response
    setDirections(directionsResponse.data);
  };

  useEffect(() => {
    setEndPoint("The station you're interested in");
    getDirections();
  }, []);

  return (
    <View style={styles.container}>
      {startPoint && endPoint && (
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: parseFloat(startPoint.split(",")[0]),
            longitude: parseFloat(startPoint.split(",")[1]),
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          {directions && (
            <Marker
              coordinate={{
                latitude: directions.routes[0].legs[0].start_location.lat,
                longitude: directions.routes[0].legs[0].start_location.lng,
              }}
            />
          )}
        </MapView>
      )}
      {arrivalTime && (
        <View style={styles.info}>
          <Text>
            The bus/train going to the station you're interested in will arrive
            at {arrivalTime}.
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  info: {
    padding: 10,
    backgroundColor: "#fff",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default Directions;
