import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { greeting } from "cool-package";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>App 1</Text>
      <Text>{greeting}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
