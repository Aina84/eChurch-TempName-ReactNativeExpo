/**
 * eTaiza – Empty State Component
 * Stack: React Native Expo + Tamagui
 */

import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { COLORS } from "../../../utils/styles";

export function EmptyState() {
  return (
    <View style={styles.emptyState}>
      <Text style={styles.emptyIcon}>📭</Text>
      <Text style={styles.emptyText}>Aucun rapport trouvé</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  emptyState: { alignItems: "center", paddingTop: 60 },
  emptyIcon: { fontSize: 40, marginBottom: 12 },
  emptyText: { fontSize: 14, color: COLORS.textSecondary },
});
