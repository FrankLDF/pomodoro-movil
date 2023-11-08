import { View, Text, StyleSheet } from "react-native";

export default function Timer({ time }) {
  const formattedTime = `${Math.floor(time / 60)
    .toString()
    .padStart(2, "0")}:${(time % 60).toString().padStart(2, "0")}`;
  return (
    <View style={styles.timerContainer}>
      <Text style={styles.item}>{formattedTime}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  timerContainer: {
    flex: 0.3,
    backgroundColor: "#F2F2F2",
    padding: 15,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  item: {
    fontSize: 80,
    fontWeight: "bold",
    color: "#444",
  },
});
