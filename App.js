import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
} from "react-native";
import { useState,} from "react";

import Header from "./src/components/atoms/header";
import Timer from "./src/components/atoms/timer";
import ButtonRunTime from "./src/components/atoms/button"

const colors = ["#F7DC6F", "#A2DADF", "#D7BDE2"];

export default function App() {
    const [isWorking, setIsWorking] = useState(false);
    const [time, setTime] = useState(25 * 60);
    const [currentTime, setCurrentTime] = useState("POMO" | "SHORT" | "LONG");
  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors[currentTime] }]}
    >
      <View
        style={{
          flex: 1,
          paddingHorizontal: 15,
          paddingTop: Platform.OS === "android" && 30,
        }}
      >
        <Text style={styles.titleText}>Pomodoro</Text>
        <Text style={styles.infoText}>By: Frank 2021-0226 and Enmanuel 2021-0618 </Text>
        <Header
          currentTime={currentTime}
          setCurrentTime={setCurrentTime}
          setTime={setTime}
        />
        <Timer time={time} />

        <ButtonRunTime
          setTime={setTime}
          setIsWorking={setIsWorking}
          time={time}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#259",
  },
  titleText: {
    marginTop: 5,
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  infoText: {
    color: "#666",
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
  },
});
