import React from "react";
import { View, Text } from "react-native";
import styles from "../../styles/styles";

const weatherData = [
  { city: "Bangkok", temp: 29 },
  { city: "Chiang Mai", temp: 24 },
  { city: "Phuket", temp: 28 },
];

const WeatherCard = ({ city, temp }) => {
  return (
    <View style={styles.weatherCard}>
      <Text style={styles.textCity}>{city}</Text>
      <Text style={styles.textTemp}>{temp}°C</Text>
    </View>
  );
};

const WeatherDisplay = () => {
  return (
    <View style={styles.programContainer}>
      {weatherData.map((data, index) => (
        <WeatherCard key={index} {...data} />
      ))}
    </View>
  );
};

export default WeatherDisplay;
