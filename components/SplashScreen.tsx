import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../lib/colors";

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <Ionicons
        name="stats-chart-sharp"
        color={colors.primary}
        size={150}
      />

      <Text style={styles.title}>Finance4</Text>

      <Text style={styles.version}>v1.0.0</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.background,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: colors.textPrimary,
    marginTop: 24,
  },
  version: {
    position: "absolute",
    bottom: 40,
    fontSize: 16,
    color: colors.textSecondary,
  },
});