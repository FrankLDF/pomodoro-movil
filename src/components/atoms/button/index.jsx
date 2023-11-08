import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { useState, useEffect } from "react";
import { Audio } from "expo-av";


export default function ButtonRunTime({ setTime, setIsWorking, time }){
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    let interval = null;
    if (isActive) {
      //Run timer
      interval = setInterval(() => {
        setTime(time - 1);
      }, 1000)
    } else {
      clearInterval(interval);
    }
    if (time === 0) {
      PlaySound()
      setIsActive(false);
      setIsWorking((prev) => !prev);
      setTime(setIsWorking ? 300 : 1500);
    }
    return () => clearInterval(interval);
  }, [isActive, time])
    
    
  function handleStartStop() {
    PlaySound()
    setIsActive(!isActive);
  };

  async function PlaySound() {
    const { sound } = await Audio.Sound.createAsync(
      require("../noti.mp3")
    )
    await sound.playAsync();
  }
    
  return (
    <TouchableOpacity onPress={handleStartStop} style={styles.button}>
      <Text style={{ color: "white", fontWeight: "bold" }}>
        {isActive ? "Stop" : "Start"}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#444",
    padding: 15,
    marginTop: 15,
    borderRadius: 15,
    alignItems: "center",
  },
});