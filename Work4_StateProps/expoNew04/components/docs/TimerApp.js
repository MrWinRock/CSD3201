import React, { useState, useEffect } from "react";
import { View, Text, Button } from "react-native";
import styles from "../../styles/styles";

const TimerApp = () => {
  const [time, setTime] = useState(0);

  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [isRunning]);

  const resetTimer = () => {
    setTime(0);
    setIsRunning(false);
  };

  return (
    <View style={styles.programContainer}>
      <Text style={styles.timer}>{time}s</Text>
      <View style={styles.buttonContainer}>
        <Button
          title={isRunning ? "Pause" : "Start"}
          onPress={() => setIsRunning(!isRunning)}
        />
        <Button title="Reset" onPress={resetTimer} />
      </View>
    </View>
  );
};

export default TimerApp;
